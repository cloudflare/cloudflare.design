/** @jsx jsx */
import { useEffect, useState } from "react"
import { ThemeProvider, jsx } from "theme-ui"
import { GlobalHotKeys } from "react-hotkeys"
import { set, get } from "idb-keyval"
import theme from "./theme"
import { ConfigProvider, useConfig } from "./config"
import NewConfigNotification from "./components/NewConfigNotification"
import SectionAbout from "./components/SectionAbout"
import SectionHeader from "./components/SectionHeader"
import SectionColor from "./components/SectionColor"
import SectionFigma from "./components/SectionFigma"
import SectionFooter from "./components/SectionFooter"
import SectionLocations from "./components/SectionLocations"
import ConfigHistory from "./components/ConfigHistory"
import VersionPicker from "./components/VersionPicker"
import useInterval from "./useInterval"
import isDev from "./isDev"

const Site = () => {
  const [versionId, setVersionId] = useState()
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const { config, setConfig } = useConfig()
  const [showUI, toggleShowUI] = useState(false)
  const [showVersions, setShowVersions] = useState(false)
  const [myVersions, setMyVersions] = useState([])

  useEffect(() => {
    // Load remote config via endpoint if in dev mode
    if (isDev) {
      return fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
        .then(res => res.json())
        .then(json => {
          if (json.length === 0) return
          const current = json[0]
          setConfig({ ...config, ...current.config, history: json })
        })
    }
    // Load crrent config from global variable set by KV in prod
    const configFromKV = window.__CONFIG__ ?? []
    delete window.__CONFIG__
    setConfig({ ...config, ...configFromKV[0]?.config, history: configFromKV })
  }, [])

  useInterval(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        if (json.length === 0) return
        if (!versionId) {
          setVersionId(json[0].id)
        }
        if (versionId && versionId !== json[0].id) {
          setUpdateAvailable(true)
        }
      })
  }, 10000)

  const getMyVersions = async () => {
    const myVersions = await get("myVersions")
    myVersions && setMyVersions(myVersions)
  }

  useEffect(() => {
    getMyVersions()
  }, [config])

  const handleDeployConfig = () => {
    fetch("https://cloudflare-design-write.cloudflare-ui.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        colorModes: config.colorModes,
        variants: config.variants,
        borderTop: config.borderTop,
        borderBottom: config.borderBottom
      })
    })
      .then(res => res.json())
      .then(async data => {
        setVersionId(data.id)
        const newConfig = {
          colorModes: config.colorModes,
          variants: config.variants,
          borderTop: config.borderTop,
          borderBottom: config.borderBottom
        }

        setConfig({
          ...newConfig,
          history: [
            { id: data.id, timestamp: new Date().getTime(), config: newConfig },
            ...config.history
          ]
        })

        const myVersions = await get("myVersions")
        const newMyVersions = [...(myVersions ?? []), data.id]
        await set("myVersions", newMyVersions)
        setMyVersions(newMyVersions)
      })
  }

  const keyMap = {
    TOGGLE_CONFIG_UI: ";",
    TOGGLE_VERSIONS_UI: "ESC"
  }

  const handlers = {
    TOGGLE_CONFIG_UI: () => {
      toggleShowUI(prev => !prev)
    },
    TOGGLE_VERSIONS_UI: () => {
      setShowVersions(prev => !prev)
    }
  }

  return (
    <div
      sx={{
        fontFamily: "system-ui, sans-serif",
        color: "black"
      }}
    >
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
      {showVersions && (
        <VersionPicker
          setConfig={newConfig => {
            setConfig({ ...newConfig.config, history: config.history })
            setShowVersions(false)
          }}
          myVersions={myVersions}
          configs={config.history.slice(0, 7)}
          onClose={() => setShowVersions(false)}
        />
      )}
      <NewConfigNotification show={updateAvailable} />

      <div sx={{ position: "relative" }}>
        <SectionHeader showUI={showUI} />
      </div>
      <div sx={{ position: "relative" }}>
        <SectionColor showUI={showUI} />
      </div>
      <div sx={{ position: "relative" }}>
        <SectionFigma showUI={showUI} />
      </div>
      <div sx={{ position: "relative" }}>
        <SectionLocations showUI={showUI} />
      </div>
      <div sx={{ position: "relative" }}>
        <SectionAbout showUI={showUI}>
          <button
            sx={{
              appearance: "none",
              width: "auto",
              border: 0,
              textalign: "center",
              py: 3,
              px: 4,
              mr: 4,
              bg: "gray.8",
              color: "gray.1",
              fontSize: 3,
              fontWeight: 700,
              cursor: "pointer",
              borderRadius: 5,
              transition: "background-color .2s ease-in, color .2s ease-in",
              ":hover": {
                bg: "gray.9",
                color: "gray.0",
                transition: "background-color .2s ease-in, color .2s ease-in"
              }
            }}
            onClick={() => toggleShowUI(prev => !prev)}
          >
            Edit design
          </button>
          <button
            onClick={handleDeployConfig}
            sx={{
              appearance: "none",
              width: "auto",
              border: 0,
              borderRadius: 5,
              textalign: "center",
              py: 3,
              px: 4,
              bg: "black",
              color: "white",
              fontSize: 3,
              fontWeight: 700,
              cursor: "pointer",
              transition: "background-color .2s ease-in",
              ":hover": {
                bg: "blue.4",
                transition: "background-color .2s ease-in"
              }
            }}
          >
            Publish design
          </button>

          {config.history.length > 0 && (
            <ConfigHistory
              onPreviewClick={() => setShowVersions(prev => !prev)}
              history={config.history}
              myVersions={myVersions}
            />
          )}
        </SectionAbout>
      </div>
      <div sx={{ position: "relative" }}>
        <SectionFooter showUI={showUI} />
      </div>
    </div>
  )
}

function App() {
  return (
    <ConfigProvider
      initialConfig={{
        colorModes: {
          colorSection: 1,
          figmaSection: 1,
          headerSection: 1,
          locationSection: 1,
          footerSection: 1
        },
        variants: {
          colorSection: 1,
          figmaSection: 1,
          headerSection: 1,
          locationSection: 1,
          footerSection: 1
        },
        borderTop: {
          colorSection: true,
          figmaSection: true,
          headerSection: true,
          locationSection: true
        },
        borderBottom: {
          colorSection: true,
          figmaSection: true,
          headerSection: true,
          locationSection: true
        },
        history: []
      }}
    >
      <ThemeProvider theme={theme}>
        <Site />
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default App
