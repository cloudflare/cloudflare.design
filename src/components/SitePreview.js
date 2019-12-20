/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect, useState, useRef } from "react"
import SectionHeader from "./SectionHeader"
import SectionColor from "./SectionColor"
import SectionFigma from "./SectionFigma"
import SectionFooter from "./SectionFooter"
import SectionLocations from "./SectionLocations"

const SitePreview = ({ config, myVersions, setConfig }) => {
  const previewRef = useRef()
  const [dimensions, setDimensions] = useState({
    width: "100vw",
    height: "100vh"
  })

  const scale = 0.1

  const isMyVersion = myVersions.includes(config.id)

  useEffect(() => {
    const previewEl = previewRef.current
    setDimensions({
      width: previewEl.scrollWidth,
      height: previewEl.scrollHeight
    })
  }, [previewRef])

  return (
    <div>
      <div
        onClick={setConfig}
        sx={{
          cursor: "pointer",
          position: "relative",
          height: dimensions.height * scale,
          width: dimensions.width * scale,
          mx: [2,3],
          boxShadow: "0 0 16px 4px rgba(0,0,0,0.10)"
        }}
      >
        <div
          ref={previewRef}
          sx={{
            width: dimensions.width,
            position: "relative",
            transform: `scale(${scale})`,
            transformOrigin: "0px 0px",
            backgroundColor: "white",
            pointerEvents: "none"
          }}
        >
          <SectionHeader
            colorMode={config.config.colorModes.headerSection}
            variant={config.config.variants.headerSection}
            showUI={false}
          />
          <SectionColor
            colorMode={config.config.colorModes.colorSection}
            variant={config.config.variants.colorSection}
            showUI={false}
          />
          <SectionFigma
            colorMode={config.config.colorModes.figmaSection}
            variant={config.config.variants.figmaSection}
            showUI={false}
          />
          <SectionLocations
            colorMode={config.config.colorModes.locationSection}
            variant={config.config.variants.locationSection}
            showUI={false}
          />
          <SectionFooter
            colorMode={config.config.colorModes.footerSection}
            variant={config.config.variants.footerSection}
            showUI={false}
          />
        </div>
      </div>
      <div
        sx={{
          fontSize: 1,
          textAlign: "center",
          mt: 3,
          fontWeight: isMyVersion && 600
        }}
      >
        v0.{config.id}.0
      </div>
      <div sx={{ display: ['none', 'block'], fontSize: 1, fontWeight: 600, textAlign: "center", mt: 1 }}>
        {new Date(config.timestamp).toLocaleString()}
      </div>
    </div>
  )
}

export default SitePreview
