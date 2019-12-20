/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import {
  useVariant,
  useColorMode,
  useBorderBottom,
  useBorderTop
} from "../config"
import data from "../data"
import IconLink from "./IconLink"
import PickerUIs from "./PickerUIs"

const sectionKey = "footerSection"

const variants = [
  {
    label: "0",
    value: 0
  },
  {
    label: "1",
    value: 1
  },
  {
    label: "2",
    value: 2
  },
  {
    label: "3",
    value: 3
  }
]

const SectionFooter = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey, props.variant)
  const { borderTop } = useBorderTop(sectionKey, props.borders)
  const { borderBottom } = useBorderBottom(sectionKey, props.borders)
  const { background, text, border } = useColorMode(sectionKey, props.colorMode)

  switch (variant) {
    case 0:
    default:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <footer
            sx={{
              color: text,
              bg: background,
              py: 4,
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border
            }}
          >
            <div sx={{ display: "flex", alignItems: "center" }}>
              <small sx={{ ml: 3, fontSize: 0 }}>{data.copyright}</small>
              <div sx={{ ml: "auto" }}>
                <IconLink />
              </div>
            </div>
          </footer>
        </Fragment>
      )
    case 1:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <footer
            sx={{
              color: text,
              bg: background,
              py: 4,
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border
            }}
          >
            <div sx={{ display: "flex", alignItems: "center" }}>
              <small sx={{ ml: 3, fontSize: 0 }}>{data.copyright}</small>
              <div sx={{ ml: "auto" }}>
                <div
                  sx={{
                    fontSize: [5, 6, 7],
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <a
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      mr: 3
                    }}
                    href="https://dribbble.com/cloudflare"
                  >
                    Dribbble
                  </a>
                  <a
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      mr: 3
                    }}
                    href="https://github.com/cloudflare"
                  >
                    GitHub
                  </a>
                  <a
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      mr: 3
                    }}
                    href="https://twitter.com/cloudflare"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </Fragment>
      )
    case 2:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <footer
            sx={{
              color: text,
              bg: background,
              py: 4,
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border
            }}
          >
            <div sx={{ display: "flex", alignItems: "center" }}>
              <small sx={{ ml: 3, fontSize: 0 }}>{data.copyright}</small>
              <div sx={{ ml: "auto" }}>
                <IconLink variant={1} />
              </div>
            </div>
          </footer>
        </Fragment>
      )
    case 3:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <footer
            sx={{
              color: text,
              bg: background,
              py: [4, 5, 6],
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border
            }}
          >
            <small
              sx={{ display: "block", textAlign: "center", fontSize: 0, mb: 4 }}
            >
              {data.copyright}
            </small>
            <div sx={{ display: "flex", justifyContent: "center" }}>
              <IconLink variant={2} />
            </div>
          </footer>
        </Fragment>
      )
  }
}

export default SectionFooter
