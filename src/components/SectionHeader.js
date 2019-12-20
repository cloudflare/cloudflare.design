/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import SiteTitle from "./SiteTitle"
import data from "../data"
import PickerUIs from "./PickerUIs"
import {
  useColorMode,
  useBorderTop,
  useBorderBottom,
  useVariant
} from "../config"
import Logo from "./Logo"
import CF01 from "./CF01"

const sectionKey = "headerSection"

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
  },
  {
    label: "4",
    value: 4
  },
  {
    label: "5",
    value: 5
  },
  {
    label: "6",
    value: 6
  },
  {
    label: "7",
    value: 7
  }
]

const clouds = [...Array(10).keys()].map(index => (
  <div
    sx={{
      display: "block",
      position: "absolute",
      pointerEvents: "none",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      left: Math.random() * window.outerWidth - 100,
      bottom: `-${Math.random() * 100}px`,
      animationName: Math.random() > 0.5 ? "cloud-left" : "cloud-right",
      animationDuration: `${Math.random() * 40 + 100}s`,
      opacity: 0.5 - Math.random() / 2
    }}
  >
    <img
      key={index}
      className="cloud"
      src="cloud.png"
      sx={{
        transform: `rotate(${Math.random() * 360}deg) scale(${Math.random() +
          1})`
      }}
    />
  </div>
))

const SectionHeader = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey, props.variant)
  const { borderTop } = useBorderTop(sectionKey, props.borders)
  const { borderBottom } = useBorderBottom(sectionKey, props.borders)
  const { background, text, primary, border } = useColorMode(
    sectionKey,
    props.colorMode
  )

  switch (variant) {
    case 0:
    default:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              display: "flex",
              justifyContent: "center",
              px: 3,
              bg: background,
              color: text,
              py: [5, 6, 7],
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border
            }}
          >
            <Logo variant="mark" sx={{ width: [64, 96, 128], mr: [3, 4] }} />
            <SiteTitle text={data.title} />
          </header>
        </Fragment>
      )
    case 1:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header {...props}>
            <div
              sx={{
                bg: background,
                color: text,
                display: "flex",
                alignItems: "center",
                borderBottom: borderBottom && "1px solid",
                borderTop: borderTop && "1px solid",
                borderColor: border,
                overflow: "hidden"
              }}
            >
              <Logo variant="mark" sx={{ mx: 3, width: [48, 160] }} />
              <h1
                sx={{
                  pl: 3,
                  my: 0,
                  fontSize: [7, 7, 96],
                  borderLeft: "1px solid",
                  borderColor: border,
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  py: 0
                }}
              >
                Cloudflare Design
              </h1>
            </div>
          </header>
        </Fragment>
      )
    case 2:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border,
              py: 4,
              px: 3,
              bg: background,
              color: text
            }}
          >
            <Logo variant="mark" sx={{ width: 48, mr: 2 }} />
            <h1
              sx={{
                my: 0,
                fontSize: [3, 3, 4],
                textAlign: "center"
              }}
            >
              Design
            </h1>
          </header>
        </Fragment>
      )
    case 3:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border,
              py: 4,
              px: 3,
              bg: background,
              color: text
            }}
          >
            <Logo variant="mark" sx={{ width: 48, mr: 3 }} />
            <h1
              sx={{
                my: 0,
                fontSize: [3, 3, 4],
                textAlign: "center"
              }}
            >
              Cloudflare Design
            </h1>
          </header>
        </Fragment>
      )
    case 4:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border,
              bg: background,
              color: text,
              py: [5, 6, 7]
            }}
          >
            <div
              sx={{
                maxWidth: "64em",
                mx: "auto",
                display: "flex",
                alignItems: "center",
                flexWrap: ["wrap", "nowrap"],
                justifyContent: "space-between",
                px: 4
              }}
            >
              <h1
                sx={{
                  fontSize: [5, 7, 9],
                  lineHeight: [1, 0.995],
                  fontWeight: 700,
                  mr: [0, 6],
                  mt: 0,
                  mb: [4, 0]
                }}
              >
                Cloudflare <br />
                Design
              </h1>
              <h2 sx={{ my: 0, lineHeight: 1, fontSize: [3, 4, 5] }}>
                San Francisco
                <br /> Austin
                <br />
                London
                <br />
                Lisbon
              </h2>
            </div>
          </header>
        </Fragment>
      )
    case 5:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border,
              bg: background,
              color: text,
              position: "relative"
            }}
          >
            <style>{`
              @keyframes cloud-left {
              0% {
                transform: translateX(0);
              }

              50% {
                transform: translateX(-400px);
              }

              100% {
                transform: translateX(0);
              }
            }
            @keyframes cloud-right {
              0% {
                transform: translateX(0);
              }

              50% {
                transform: translateX(400px);
              }

              100% {
                transform: translateX(0);
              }
            }
            `}</style>

            <div
              sx={{
                position: "absolute",
                top: 0,
                overflow: "hidden",
                width: "100%",
                height: "100%"
              }}
            >
              {clouds}
            </div>
            <div
              sx={{
                display: "flex",
                alignItems: "center",
                px: 4
              }}
            >
              <Logo
                variant="mark"
                sx={{ width: [32, 64, 96], mr: 3, position: "relative" }}
              />
              <h1
                sx={{
                  position: "relative",
                  fontSize: [4, 6, 8],
                  lineHeight: [1, 0.995],
                  fontWeight: 700,
                  mx: 3,
                  my: 4
                }}
              >
                Cloudflare Design
              </h1>
            </div>
          </header>
        </Fragment>
      )
    case 6:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border,
              bg: background,
              color: text,
              py: [5, 6, 7]
            }}
          >
            <div
              sx={{
                maxWidth: "64em",
                mx: "auto",
                display: "flex",
                alignItems: "center",
                flexWrap: ["wrap", "nowrap"],
                justifyContent: "space-between",
                px: 4
              }}
            >
              <div sx={{ width: "50%" }}>
                <h1
                  sx={{
                    fontSize: [5, 7, 9],
                    lineHeight: [1, 0.995],
                    fontWeight: 700,
                    mt: 0,
                    mr: [0, 6],
                    mb: [4, 0]
                  }}
                >
                  Cloudflare <br />
                  Design
                </h1>
              </div>
              <div sx={{ width: "50%" }}>
                <CF01 />
              </div>
            </div>
          </header>
        </Fragment>
      )
    case 7:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border,
              bg: background,
              color: text,
              py: [5, 6, 7]
            }}
          >
            <div
              sx={{
                maxWidth: "64em",
                mx: "auto",
                display: "flex",
                alignItems: "center",
                flexWrap: ["wrap", "nowrap"],
                justifyContent: "space-between",
                px: 4
              }}
            >
              <div sx={{ width: "33.33%" }}>
                <Logo variant="lego" />
              </div>
              <div sx={{ pl: [4, 5, 6], width: "66.66%" }}>
                <h1
                  sx={{
                    fontSize: [6, 8, 8],
                    lineHeight: [1, 0.995],
                    fontWeight: 700,
                    mt: 0,
                    mb: [4, 0]
                  }}
                >
                  Cloudflare <br />
                  Design
                </h1>
              </div>
            </div>
          </header>
        </Fragment>
      )
  }
}

export default SectionHeader
