/** @jsx jsx */
import { jsx } from "theme-ui"
import SitePreview from "./SitePreview"

const VersionPicker = ({ configs, myVersions, setConfig, onClose }) => {
  return (
    <section
      sx={{
        display: "flex",
        zIndex: 9,
        overflow: "auto",
        justifyContent: "center",
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        width: "100vw",
        background: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(6px)",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <button
        sx={{
          appearance: "none",
          position: "absolute",
          top: "32px",
          right: "32px",
          background: "transparent",
          borderRadius: 2,
          border: "1px solid",
          fontWeight: 700,
          py: 1,
          px: 2,
          fontSize: 2,
          cursor: "pointer",
          color: "gray.0"
        }}
        onClick={onClose}
      >
        Close
      </button>
    <div sx={{pt: 6, display: 'flex', 
        flexWrap: ["wrap", "nowrap"],
        alignItems: "top",
    }}>
      {configs.map(config => (
        <SitePreview
          key={config.id}
          config={config}
          myVersions={myVersions}
          setConfig={() => setConfig(config)}
        />
      ))}
    </div>
    </section>
  )
}

export default VersionPicker
