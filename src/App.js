/** @jsx jsx */
import { ThemeProvider, jsx } from "theme-ui";
import logo from "./logo.svg";
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
      <header sx={{ color: "primary" }}>
        <NewTheme />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </ThemeProvider>
  );
}

export default App;
