/** @jsx jsx */
import { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import data from "./data";
import { ConfigProvider, useConfig, jsx } from "./config";
import NewConfigNotification from "./components/NewConfigNotification";
import SectionHeader from "./components/SectionHeader";
import SectionColor from "./components/SectionColor";
import SectionFigma from "./components/SectionFigma";
import SectionFooter from "./components/SectionFooter";
import SectionLocations from "./components/SectionLocations";
import IconLink from "./components/IconLink";
import useInterval from "./useInterval";

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
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const { config, setConfig } = useConfig();

  // Load remote config and replace when ready
  useEffect(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        setConfig(json.config);
      });
  }, []);

  useInterval(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        if (!versionId) {
          setVersionId(json.id);
        }
        if (versionId && versionId !== json.id) {
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
      body: JSON.stringify(config)
    })
      .then(res => res.json())
      .then(data => {
        setVersionId(data.id);
      });
  };

  return (
    <div
      sx={{
        fontFamily: "system-ui, sans-serif",
        // We can then assign those values justt like we would a normal theme value and it gets picked up by theme-ui and converted into a value
        color: "c.colorPrimary",
        bg: "c.colorSecondary"
      }}
    >
      <NewConfigNotification show={updateAvailable} />
      <SectionHeader variant={1} />
      <SectionColor />
      <SectionFigma variant={1} />
      <SectionLocations variant={1} />
      <SectionFooter variant={1} />
      <div sx={{ bg: '#000', textAlign: 'center' }}>
        <button onClick={handleDeployConfig} sx={{
          width: '100%',
          border: 0, 
          textAlign: 'center',
          py: 3, 
          px: 3,
          bg: 'black',
          color: 'white',
          fontSize: 4, 
          fontWeight: 800,
          cursor: 'pointer',
          transition: 'background-color .2s ease-in',
          ":hover": {
            bg: 'blue.4',
            transition: 'background-color .2s ease-in'
          }
        }}>Deploy config</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <ConfigProvider
      initialConfig={{
        colorPrimary: "white",
        colorSecondary: "gray.0",
        variants: {
          colorSection: 0,
          headerSection: 0
        }
      }}
    >
      {config => (
        <ThemeProvider theme={{ ...theme, c: { ...config } }}>
          <Site />
        </ThemeProvider>
      )}
    </ConfigProvider>
  );
}

export default App;
