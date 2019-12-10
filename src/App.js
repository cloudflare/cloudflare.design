/** @jsx jsx */
import jsx from "./jsx";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import data from './data'
import { ConfigProvider } from "./useConfig";
import NewConfigNotification from "./NewConfigNotification";
import SiteTitle from './components/SiteTitle'

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
      <div  sx={{ fontFamily: 'system-ui, sans-serif' }}>
          <header
            sx={{
              // We can then assign those values justt like we would a normal theme value and it gets picked up by theme-ui and converted into a value
              color: "c.colorPrimary",
              textDecoration: "underline",
              bg: "c.colorSecondary"
            }}
          >
            <NewConfigNotification />
            <SiteTitle text={data.title} />
        </header>
        <section>
          <h3 sx={{
            fontSize: [3,5,6], 
            textAlign: 'center' 
          }}>
            Locations
          </h3>
        </section>
        <footer sx={{p: 2, borderTop: '1px solid'}}>
          <small sx={{ fontSize: 0 }}>{data.copyright}</small>
        </footer>
      </div>

        </ThemeProvider>
      )}
    </ConfigProvider>
  );
}

export default App;
