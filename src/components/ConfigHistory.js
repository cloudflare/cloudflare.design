/** @jsx jsx */
import { jsx } from "theme-ui";
import reverse from "lodash/reverse";
import { useConfig } from "../config";

const ConfigHistory = ({ history, onPreviewClick, ...props }) => {
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
    <div {...props}>
      <div sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <h4 sx={{ mb: 0, mt: 5, mr: "auto" }}>Versions</h4>
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
        <button
          onClick={onPreviewClick}
          sx={{
            appearance: "none",
            bg: "white",
            color: "gray.0",
            border: "1px solid",
            borderRadius: 5,
            mt: 4,
            px: 5,
            py: 3,
            mx: 'auto',
            fontSize: 2,
            fontWeight: 700,
            cursor: "pointer",
            width:'auto',
            display: 'block'
          }}
        >
          View gallery
        </button>
    </div>
  );
};

export default ConfigHistory;
