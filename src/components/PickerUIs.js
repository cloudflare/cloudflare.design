/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { useBorderTop, useBorderBottom } from "../config"

import VariantPicker from "./VariantPicker"
import ColorModePicker from "./ColorModePicker"

const PickerUIs = ({ variants, sectionKey }) => {
  const { borderTop, setBorderTop } = useBorderTop(sectionKey)
  const { borderBottom, setBorderBottom } = useBorderBottom(sectionKey)

  const handleSetBorderTop = e => {
    const checkboxValue = e.target.checked
    setBorderTop(checkboxValue)
  }

  const handleSetBorderBottom = e => {
    const checkboxValue = e.target.checked
    setBorderBottom(checkboxValue)
  }

  return (
    <div
      sx={{
        top: "8px",
        right: "8px",
        borderRadius: 5,
        fontSize: 1,
        position: "absolute",
        px: 3,
        bg: "black",
        color: "white",
        boxShadow:
          "rgba(50, 50, 93, 0.247059) 0px 13px 27px -5px, rgba(0, 0, 0, 0.298039) 0px 8px 16px -8px, rgba(0, 0, 0, 0.0235294) 0px -6px 16px -6px"
      }}
    >
      <div sx={{ display: "flex" }}>
        <label
          sx={{
            py: 2,
            pr: 3,
            borderRight: "1px solid rgba(255,255,255,.25)",
            display: "flex",
            alignItems: "center"
          }}
        >
          <span sx={{ mr: 2 }}>Variant</span>
          <VariantPicker variants={variants} variantKey={sectionKey} />
        </label>
        <label
          sx={{
            py: 2,
            px: 3,
            borderRight: "1px solid rgba(255,255,255,.25)",
            display: "flex",
            alignItems: "center"
          }}
        >
          <span sx={{ mr: 2 }}>Color Mode</span>
          <ColorModePicker configKey={sectionKey} />
        </label>
        <label sx={{ px: 3, display: "flex", alignItems: "center" }}>
          <span sx={{ mr: 2 }}>Border Top</span>
          <input
            checked={borderTop}
            onChange={handleSetBorderTop}
            type="checkbox"
          />
        </label>
        <label sx={{ px: 3, display: "flex", alignItems: "center" }}>
          <span sx={{ mr: 2 }}>Border Bottom</span>
          <input
            checked={borderBottom}
            onChange={handleSetBorderBottom}
            type="checkbox"
          />
        </label>
      </div>
    </div>
  )
}

export default PickerUIs
