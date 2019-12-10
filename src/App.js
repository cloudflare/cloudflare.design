/** @jsx jsx */
import jsx from "./jsx";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import { ConfigProvider } from "./useConfig";
import NewConfigNotification from "./NewConfigNotification";

// This is the current config from the worker
// and just maps a key of our choosing to a value from our theme file
window.__CONFIG__ = {
  colorPrimary: "orange.3",
  colorSecondary: "gray.8"
};

const initialConfig = window.__CONFIG__;
delete window.__CONFIG__;

function App() {
  return (
    <ConfigProvider initialConfig={initialConfig}>
      {config => (
        <ThemeProvider theme={{ ...theme, c: { ...config } }}>
          <header
            sx={{
              // We can then assign those values justt like we would a normal theme value and it gets picked up by theme-ui and converted into a value
              color: "c.colorPrimary",
              textDecoration: "underline",
              bg: "c.colorSecondary"
            }}
          >
            <NewConfigNotification />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a href="https://reactjs.org">Learn React</a>
          </header>
        </ThemeProvider>
      )}
    </ConfigProvider>
  );
}

export default App;
