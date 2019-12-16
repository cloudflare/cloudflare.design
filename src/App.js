/** @jsx jsx */
import React, { useEffect, useState } from "react";
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

const Site = () => {
  const [versionId, setVersionId] = useState();
  const [showUI, toggleShowUI] = useState(true);
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

  const keyMap = {
    TOGGLE_CONFIG_UI: ";"
  };

  const handlers = {
    TOGGLE_CONFIG_UI: () => {
      toggleShowUI(prev => !prev);
    }
  };

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
      <GlobalHotKeys keyMap={keyMap} handlers={handlers} />
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
        <Site />
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
