/** @jsx jsx */
import { jsx } from "theme-ui"
import { useConfig, useColorMode } from "../config"

const sectionKey = "aboutSection"

const ConfigHistory = ({ history, myVersions, onPreviewClick, ...props }) => {
  const { config, setConfig } = useConfig()
  const { text } = useColorMode(sectionKey, props.colorMode)

  const handleSetConfig = i => () => {
    const { history } = config

    setConfig(prev => ({
      colorModes: history[i].config.colorModes,
      variants: history[i].config.variants,
      borderTop: history[i].config.borderTop,
      borderBottom: history[i].config.borderBottom,
      history: prev.history
    }))
  }

  return (
    <div {...props}>
      <div sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <h4 sx={{ mb: 0, mt: 5, mr: "auto" }}>
          Previous designs{" "}
          <span sx={{ fontSize: 1, fontWeight: 400, ml: 1 }}>
            (versions in bold are ones you created)
          </span>
        </h4>
      </div>
      <div sx={{ flexWrap: "wrap", display: "flex", mx: -3 }}>
        {history.map((h, i) => (
          <div key={i} sx={{ width: ["25%", "20%", "12.5%"], px: 3 }}>
            <button
              sx={{
                px: 0,
                appearance: "none",
                webkitAppearance: "none",
                bg: "transparent",
                width: "100%",
                color: text,
                borderTop: 0,
                borderLeft: 0,
                borderRight: 0,
                borderBottom: "0px solid",
                textAlign: "left",
                fontSize: 1,
                fontWeight: myVersions.includes(h.id) && 700,
                mb: 3,
                cursor: "pointer",
                transition: "color .2s ease-in",
                ":hover": {
                  color: "indigo.5"
                }
              }}
              onClick={handleSetConfig(i)}
            >
              v0.{h.id}.0
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
          mx: "auto",
          fontSize: 2,
          fontWeight: 700,
          cursor: "pointer",
          width: "auto",
          display: "block"
        }}
      >
        Preview previous designs
      </button>
    </div>
  )
}

export default ConfigHistory
