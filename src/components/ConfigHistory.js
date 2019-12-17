/** @jsx jsx */
import { jsx } from "theme-ui";
import reverse from "lodash/reverse";
import { useConfig } from "../config";

const ConfigHistory = ({ history, onPreviewClick }) => {
  const { config, setConfig } = useConfig();

  const handleSetConfig = i => () => {
    const { history } = config;

    const reversed = reverse([...history]);

    setConfig(prev => ({
      colorModes: reversed[i].config.colorModes,
      variants: reversed[i].config.variants,
      history: prev.history
    }));
  };

  return (
    <div sx={{ p: 4 }}>
      <div sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <h4 sx={{ m: 0, mr: "auto" }}>Versions</h4>
        <button
          onClick={onPreviewClick}
          sx={{
            appearance: "none",
            bg: "black",
            color: "white",
            border: "none",
            borderRadius: 2,
            px: 3,
            py: 2,
            fontSize: 2,
            cursor: "pointer"
          }}
        >
          Preview last 7 designs
        </button>
      </div>
      <div sx={{ flexWrap: "wrap", display: "flex", mx: -3 }}>
        {history.map((h, i) => (
          <div key={i} sx={{ width: "12.5%", px: 3 }}>
            <button
              sx={{
                px: 0,
                appearance: "none",
                webkitAppearance: "none",
                bg: "transparent",
                width: "100%",
                color: "black",
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "0px solid",
                textAlign: "left",
                fontSize: 1,
                mb: 3,
                cursor: "pointer",
                transition: "color .2s ease-in",
                ":hover": {
                  color: "indigo.5"
                }
              }}
              onClick={handleSetConfig(i)}
            >
              v0.0.{i}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfigHistory;
