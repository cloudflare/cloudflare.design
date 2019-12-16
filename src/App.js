/** @jsx jsx */
import React, { useEffect, useState, useRef } from "react";
import { ThemeProvider, jsx } from "theme-ui";
import { GlobalHotKeys } from "react-hotkeys";
import drop from "lodash/drop";
import theme from "./theme";
import { ConfigProvider, useConfig } from "./config";
import NewConfigNotification from "./components/NewConfigNotification";
import SectionHeader from "./components/SectionHeader";
import SectionColor from "./components/SectionColor";
import SectionFigma from "./components/SectionFigma";
import SectionFooter from "./components/SectionFooter";
import SectionLocations from "./components/SectionLocations";
import ConfigHistory from "./components/ConfigHistory";
import useInterval from "./useInterval";
import Frame from "./components/Frame";
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

const SitePreview = ({ config }) => {
  const previewRef = useRef();
  const [dimensions, setDimensions] = useState({
    width: "100vw",
    height: "100vh"
  });

  const scale = 0.1;

  useEffect(() => {
    const previewEl = previewRef.current;
    setDimensions({
      width: previewEl.scrollWidth,
      height: previewEl.scrollHeight
    });
  }, [previewRef]);

  return (
    <div>
      <div
        sx={{
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
      <div sx={{fontSize: 1, fontWeight: 600, textAlign: 'center', mt: 3}}>{new Date(config.timestamp).toLocaleString()}</div>
    </div>
  );
};

const VersionPicker = ({ configs }) => {
  return (
    <section
      sx={{
        display: "flex",
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
      {configs.map(config => (
        <SitePreview key={config.id} config={config} />
      ))}
    </section>
  );
};

const Site = ({ showUI }) => {
  const [versionId, setVersionId] = useState();
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const { config, setConfig } = useConfig();

  console.log(config);

  // Load remote config and replace when ready
  useEffect(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        const current = json[0];

        setConfig({ ...current.config, history: json });
      });
  }, []);

  useInterval(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        if (!versionId) {
          setVersionId(json[0].id);
        }
        if (versionId && versionId !== json[0].id) {
          setUpdateAvailable(true);
        }
      });
  }, 10000);

  const handleDeployConfig = () => {
    fetch("https://cloudflare-design-write.cloudflare-ui.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        colorModes: config.colorModes,
        variants: config.variants
      })
    })
      .then(res => res.json())
      .then(data => {
        setVersionId(data.id);
        const newConfig = {
          colorModes: config.colorModes,
          variants: config.variants,
          history: [
            {
              id: data.id,
              config: {
                colorModes: config.colorModes,
                variants: config.variants
              }
            },
            ...config.history
          ]
        };
        setConfig(newConfig);
      });
  };

  return (
    <div
      sx={{
        fontFamily: "system-ui, sans-serif",
        color: "black"
      }}
    >
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
        <SectionFooter showUI={showUI} />
      </div>
      <ConfigHistory history={config.history} />
      <div sx={{ display: "none" }}>
        <Frame>
          <div
            sx={{
              fontFamily: "system-ui, sans-serif",
              // We can then assign those values justt like we would a normal theme value and it gets picked up by theme-ui and converted into a value
              color: "c.colorPrimary",
              bg: "c.colorSecondary"
            }}
          >
            <SectionHeader showUI={false} />
            <SectionColor showUI={false} />
            <SectionFigma showUI={false} />
            <SectionLocations showUI={false} />
            <SectionFooter showUI={false} />
          </div>
        </Frame>
      </div>

      <div sx={{ bg: "#000", textAlign: "center" }}>
        <button
          onClick={handleDeployConfig}
          sx={{
            width: "100%",
            border: 0,
            textAlign: "center",
            py: 3,
            px: 3,
            bg: "black",
            color: "white",
            fontSize: 4,
            fontWeight: 800,
            cursor: "pointer",
            transition: "background-color .2s ease-in",
            ":hover": {
              bg: "blue.4",
              transition: "background-color .2s ease-in"
            }
          }}
        >
          Deploy config
        </button>
      </div>
    </div>
  );
};

function App() {
  const [configs, setConfigs] = useState([]);

  const [showUI, toggleShowUI] = useState(true);
  const [showVersions, setShowVersions] = useState(false);

  useEffect(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        setConfigs(json);
      });
  }, []);

  const keyMap = {
    TOGGLE_CONFIG_UI: ";",
    TOGGLE_VERSIONS_UI: "ESC"
  };

  const handlers = {
    TOGGLE_CONFIG_UI: () => {
      toggleShowUI(prev => !prev);
    },
    TOGGLE_VERSIONS_UI: () => {
      setShowVersions(prev => !prev);
    }
  };

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
        history: []
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
        <Site showUI={showUI} />
        {showVersions && <VersionPicker configs={configs.slice(0, 7)} />}
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
