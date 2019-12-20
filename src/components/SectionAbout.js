/** @jsx jsx */
import { Fragment } from "react"
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
        <Fragment>
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
                With the power of{" "}
                <a
                  sx={{ color: "currentColor" }}
                  href="https://www.cloudflare.com/products/cloudflare-workers/"
                >
                  Cloudflare Workers
                </a>{" "}
                and{" "}
                <a
                  sx={{ color: "currentColor" }}
                  href="https://www.cloudflare.com/products/workers-kv/"
                >
                  KV
                </a>{" "}
                - we've allowed the design of this page to be configured and
                updated by anyone. That's right, anyone can update the design of
                this page.{" "}
              </p>

              <p sx={{ lineHeight: 1.5, fontSize: [4, 5, 5] }}>
                Press
                <code
                  sx={{
                    px: 2,
                    pt: 0,
                    pb: 1,
                    borderRadius: 2,
                    mx: 2,
                    border: "1px solid",
                    borderColor: "gray.6",
                    lineHeight: 0,
                    verticalAlign: "middle"
                  }}
                >
                  ;
                </code>
                to launch the editor controls.{" "}
              </p>
              <p sx={{ lineHeight: 1.5, fontSize: [4, 5, 5] }}>
                Press
                <code
                  sx={{
                    px: 2,
                    pt: 0,
                    pb: 1,
                    borderRadius: 2,
                    mx: 2,
                    border: "1px solid",
                    borderColor: "gray.6",
                    lineHeight: 0,
                    verticalAlign: "middle"
                  }}
                >
                  esc
                </code>{" "}
                to visually preview past designs.
              </p>
              <p sx={{ lineHeight: 1.5, fontSize: [4, 5, 5] }}>
                Each section comes with multiple design variants that can be
                combined with a variety of color themes. Once you are happy with
                the design, you can publish your design live to
                cloudflare.design.
              </p>

              <p sx={{ lineHeight: 1.5, fontSize: [4, 5, 5] }}>
                Each section has an accompanying configuration object that when
                published is sent as JSON to a Cloudflare Worker that accesses
                the history of configurations array from a Cloudflare Worker KV,
                then prepends the latest configuration object and saves it back
                to the KV.
              </p>
              <p sx={{ lineHeight: 1.5, fontSize: [4, 5, 5] }}>
                When cloudflare.design loads it gets proxied through a
                Cloudflare Worker that fetches the configuration history from KV
                and uses the HTML Rewriter within the worker to write the
                configuration history as a global variable within the html of
                the site, the react app then reads the history into its own
                state to be used within the app.
              </p>
              {props.children}
            </div>
          </section>
        </Fragment>
      )
    case 1:
      return (
        <Fragment>
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
        </Fragment>
      )
  }
}

export default SectionAbout
