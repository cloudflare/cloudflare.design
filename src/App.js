/** @jsx jsx */
import React, { useEffect, useState, useRef } from "react"
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
import useInterval from "./useInterval"
// This is the current config from the worker
// and just maps a key of our choosing to a value from our theme file

// window.__CONFIG__ = {
//   colorPrimary: 'white',
//   colorSecondary: 'gray.2',
//   variants: {
//     card: 'default',
//     header: 'new'
//   }
// };
//
// const initialConfig = window.__CONFIG__.config;
// delete window.__CONFIG__;

const SitePreview = ({ config, setConfig }) => {
  const previewRef = useRef()
  const [dimensions, setDimensions] = useState({
    width: "100vw",
    height: "100vh"
  })

  const scale = 0.1

  useEffect(() => {
    const previewEl = previewRef.current
    setDimensions({
      width: previewEl.scrollWidth,
      height: previewEl.scrollHeight
    })
  }, [previewRef])

  return (
    <div>
      <div
        onClick={setConfig}
        sx={{
          cursor: "pointer",
          position: "relative",
          height: dimensions.height * scale,
          width: dimensions.width * scale,
          mx: 3,
          boxShadow: "0 0 15px 5px rgba(0,0,0,0.10)"
        }}
      >
        <div
          ref={previewRef}
          sx={{
            width: dimensions.width,
            position: "relative",
            transform: `scale(${scale})`,
            transformOrigin: "0px 0px",
            backgroundColor: "white",
            pointerEvents: "none"
          }}
        >
          <SectionHeader
            colorMode={config.config.colorModes.headerSection}
            variant={config.config.variants.headerSection}
            showUI={false}
          />
          <SectionColor
            colorMode={config.config.colorModes.colorSection}
            variant={config.config.variants.colorSection}
            showUI={false}
          />
          <SectionFigma
            colorMode={config.config.colorModes.figmaSection}
            variant={config.config.variants.figmaSection}
            showUI={false}
          />
          <SectionLocations
            colorMode={config.config.colorModes.locationSection}
            variant={config.config.variants.locationSection}
            showUI={false}
          />
          <SectionFooter
            colorMode={config.config.colorModes.footerSection}
            variant={config.config.variants.footerSection}
            showUI={false}
          />
        </div>
      </div>
      <div sx={{ fontSize: 1, fontWeight: 600, textAlign: "center", mt: 3 }}>
        {new Date(config.timestamp).toLocaleString()}
      </div>
    </div>
  )
}

const VersionPicker = ({ configs, setConfig, onClose }) => {
  return (
    <section
      sx={{
        display: "flex",
        zIndex: 9,
        overflow: "auto",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(6px)",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <button
        sx={{
          appearance: "none",
          position: "absolute",
          top: "32px",
          right: "32px",
          background: "transparent",
          borderRadius: 2,
          border: "1px solid",
          fontWeight: 700,
          py: 1,
          px: 2,
          fontSize: 2,
          cursor: "pointer",
          color: "gray.0"
        }}
        onClick={onClose}
      >
        Close
      </button>
      {configs.map((config, index) => (
        <SitePreview
          key={config.id}
          config={config}
          setConfig={() => setConfig(config)}
        />
      ))}
    </section>
  )
}

const Site = () => {
  const [versionId, setVersionId] = useState()
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const { config, setConfig } = useConfig()
  const [showUI, toggleShowUI] = useState(false)
  const [showVersions, setShowVersions] = useState(false)
  const [myVersions, setMyVersions] = useState([])

  console.log(config, myVersions)

  // Load remote config and replace when ready
  useEffect(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        if (json.length === 0) return
        const current = json[0]
        setConfig({ ...config, ...current.config, history: json })
      })
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
        await set("myVersions", [...(myVersions || []), data.id])
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
            Publish
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
