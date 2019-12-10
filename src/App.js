/** @jsx jsx */
import { ThemeProvider, jsx } from "theme-ui";
import logo from "./logo.svg";
import data from "./data";
import SiteTitle from "./components/SiteTitle";
import NewTheme from "./NewTheme";

window.__THEME__ = {
  colors: {
    text: "#000",
    primary: "red"
  }
};

const themeObject = window.__THEME__;
delete window.__THEME__;

function App() {
  return (
    <ThemeProvider theme={themeObject}>
      <div  sx={{ fontFamily: 'system-ui, sans-serif' }}>
        <header sx={{ 
            color: "primary" 
          }}>
          <NewTheme />
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
  );
}

export default App;

