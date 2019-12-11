/** @jsx jsx */
import { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import data from "./data";
import { ConfigProvider, useConfig, jsx } from "./config";
import NewConfigNotification from "./NewConfigNotification";
import SiteTitle from "./components/SiteTitle";
import SectionHeader from "./components/SectionHeader";
import SectionColor from "./components/SectionColor";
import SectionFigma from "./components/SectionFigma";
import SectionLocations from "./components/SectionLocations";
import IconLink from "./components/IconLink";
import Text from "./components/Text";
import Card from "./components/Card";

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

// const initialConfig = window.__CONFIG__;
// delete window.__CONFIG__;

const Site = () => {
  const { setConfig } = useConfig();

  // Load remote config and replace when ready
  useEffect(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        setConfig(json);
      });
  }, []);

  return (
    <div
      sx={{
        fontFamily: "system-ui, sans-serif",
        // We can then assign those values justt like we would a normal theme value and it gets picked up by theme-ui and converted into a value
        color: "c.colorPrimary",
        bg: "c.colorSecondary"
      }}
    >
      <NewConfigNotification />
      <SectionHeader variant={1} />
      <SectionColor variant={1} />
      <SectionFigma variant={1} />
      <SectionLocations variant={1} />
      <footer sx={{ py: 4, borderTop: "1px solid" }}>
        <div sx={{ display: "flex", alignItems: "center" }}>
          <small sx={{ ml: 3, fontSize: 0 }}>{data.copyright}</small>
          <div sx={{ ml: "auto" }}>
            <IconLink />
          </div>
        </div>
      </footer>
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
          card: "default",
          header: "new"
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
