/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import {
  useVariant,
  useColorMode,
  useBorderBottom,
  useBorderTop
} from "../config"
import PickerUIs from "./PickerUIs"

const sectionKey = "aboutSection"

const variants = [
  {
    label: "0",
    value: 0
  },
  {
    label: "1",
    value: 1
  }
]

const SectionAbout = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey, props.variant)
  const { borderTop } = useBorderTop(sectionKey, props.borders)
  const { borderBottom } = useBorderBottom(sectionKey, props.borders)
  const { border, background, text } = useColorMode(sectionKey, props.colorMode)

  switch (variant) {
    case 0:
    default:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section
            sx={{
              color: text,
              bg: background,
              py: [5, 5, 6],
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid"
            }}
          >
            <div sx={{ px: 4, maxWidth: "64em", mx: "auto" }}>
              <h3 sx={{ my: 0, fontSize: [5, 6, 6] }}>About this page</h3>
              <p
                sx={{
                  lineHeight: 1.5,
                  fontWeight: 500,
                  fontSize: [4, 5, 6]
                }}
              >
                With the power of Cloudflare Workers and KV - we've allowed the
                design of this page to be configured and updated by anyone.
                That's right, anyone can update the design of this page.{" "}
              </p>

              <p sx={{ lineHeight: 1.5, fontSize: [4, 5, 5] }}>
                Press
                <code>;</code> to launch the editor controls. <br />
                Press <code>esc</code> to visually preview past designs.
              </p>
              <p sx={{ lineHeight: 1.5, fontSize: [4, 5, 5] }}>
                Each section comes with multiple design variants that can be
                combined with a variety of color themes. Once you are happy with
                the design, you can publish your design live to
                cloudflare.design.
              </p>
              {props.children}
            </div>
          </section>
        </>
      )
    case 1:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section
            sx={{
              color: text,
              bg: background,
              py: 4,
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid"
            }}
          >
            <h3>About</h3>
            {props.children}
          </section>
        </>
      )
  }
}

export default SectionAbout
