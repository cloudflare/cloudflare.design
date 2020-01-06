/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import {
  useVariant,
  useColorMode,
  useBorderBottom,
  useBorderTop
} from "../config"
import Card from "./Card"
import Text from "./Text"
import PickerUIs from "./PickerUIs"
import eyeImg from "../images/eye-transparent.png"
import chartsImg from "../images/charts.png"
import translateImg from "../images/translate.png"
import samFigmaImg from "../images/sam-figma.jpg"

const sectionKey = "figmaSection"

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

const SectionFigma = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey, props.variant)
  const { borderTop } = useBorderTop(sectionKey, props.borders)
  const { borderBottom } = useBorderBottom(sectionKey, props.borders)
  const { background, text, border, primary } = useColorMode(
    sectionKey,
    props.colorMode
  )

  switch (variant) {
    case 0:
    default:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section
            sx={{
              px: 4,
              py: [5, 5, 6],
              color: text,
              bg: background,
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border
            }}
          >
            <h3
              sx={{
                fontSize: [3, 5, 6],
                textAlign: "center",
                mb: [4, 5, 5]
              }}
            >
              Figma Plugins
            </h3>
            <Text>
              As we've been making the transition to Figma, we've been building
              some plugins to help us with common workflows.
            </Text>
            <div sx={{ mt: 5, maxWidth: "64em", mx: "auto" }}>
              <div
                sx={{
                  display: "flex",
                  flexWrap: ["wrap", "nowrap"],
                  mx: [0, -3]
                }}
              >
                <div sx={{ px: [4, 3], mb: [4, 0] }}>
                  <Card
                    href="https://www.figma.com/c/plugin/733343906244951586/Color-Blind"
                    title="Color Blind"
                    text="Preview your designs in 8 different types of color vision deficiency."
                    image={eyeImg}
                    height={192}
                    border={border}
                  />
                </div>
                <div sx={{ px: [4, 3], mb: [4, 0] }}>
                  <Card
                    href="https://www.figma.com/c/plugin/733062974250826253/Translate"
                    title="Translate"
                    text="Test your UI against different languages to see what may break."
                    image={translateImg}
                    height={192}
                    border={border}
                  />
                </div>
                <div sx={{ px: [4, 3], mb: [4, 0] }}>
                  <Card
                    href="https://www.figma.com/c/plugin/731451122947612104/Charts"
                    title="Charts"
                    text="Preview your designs in 8 different types of color vision deficiency."
                    image={chartsImg}
                    height={192}
                    border={border}
                  />
                </div>
              </div>
              <article sx={{ mt: 5 }}>
                <a
                  href="https://www.figma.com/blog/behind-the-plugins-sam-mason-de-caires-cloudflare/"
                  sx={{ color: "inherit", textDecoration: "none" }}
                >
                  <span
                    sx={{
                      display: "block",
                      lineHeight: 1.5,
                      maxWidth: "34em",
                      fontSize: [3, 4, 4],
                      mx: "auto",
                      px: [4, 3],
                      mb: 3
                    }}
                  >
                    "I find the idea of a design tool with an API to be an
                    interesting one. Things that are often tedious and done by
                    hand can easily be automated if we have access to the
                    underlying code of the tool, therefore giving designers more
                    time to work on the meaningful parts of their process, like
                    designing."
                  </span>
                  <div
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      alt="Sam Mason de Caires headshot"
                      src={samFigmaImg}
                      sx={{
                        height: 64,
                        width: 64,
                        borderRadius: 9999,
                        mr: 3
                      }}
                    />
                    <div>
                      <span sx={{ display: "block", mb: 1, fontWeight: 800 }}>
                        Sam Mason
                      </span>
                      <span>UX Engineer</span>
                    </div>
                  </div>
                </a>
              </article>
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
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border
            }}
          >
            <div
              sx={{
                px: [4, 3, 3],
                py: [4, 5, 6]
              }}
            >
              <div
                sx={{
                  maxWidth: "32em",
                  fontSize: [5, 6, 6],
                  mx: "auto",
                  px: 3
                }}
              >
                <h3 sx={{ mt: 0, fontSize: [5, 7, 96], mb: 3, color: text }}>
                  Figma Plugins
                </h3>
                <p sx={{ lineHeight: 1.5, fontWeight: [400, 600, 600] }}>
                  As we've been making the transition to Figma, we've been
                  building some plugins to help us with common workflows.
                </p>
                <div sx={{ display: "flex", flexWrap: "wrap", mx: -3 }}>
                  <div sx={{ width: "100%", p: 3 }}>
                    <a
                      href="https://www.figma.com/c/plugin/733343906244951586/Color-Blind"
                      title="Color Blind"
                      sx={{
                        display: "block",
                        backgroundColor: "white",
                        borderRadius: 7,
                        backgroundImage: `url(${eyeImg})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        boxShadow: "0px 0 12px rgba(0,0,0,.1)",
                        minHeight: 320,
                        width: "100%",
                        height: "100%"
                      }}
                    />
                  </div>
                  <div sx={{ width: ["50%", "50%"], p: 3 }}>
                    <a
                      href="https://www.figma.com/c/plugin/733062974250826253/Translate"
                      title="Translate"
                      sx={{
                        display: "block",
                        boxShadow: "0px 0 12px rgba(0,0,0,.1)",
                        backgroundColor: "white",
                        backgroundImage: `url(${translateImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        borderRadius: 7,
                        minHeight: 240,
                        width: "100%",
                        height: "100%"
                      }}
                    />
                  </div>
                  <div sx={{ width: ["50%", "50%"], p: 3 }}>
                    <a
                      href="https://www.figma.com/c/plugin/731451122947612104/Charts"
                      title="Charts Blind"
                      sx={{
                        display: "block",
                        boxShadow: "0px 0 12px rgba(0,0,0,.1)",
                        backgroundColor: "white",
                        backgroundImage: `url(${chartsImg})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center center",
                        borderRadius: 7,
                        minHeight: 240,
                        width: "100%",
                        height: "100%"
                      }}
                    />
                  </div>
                </div>
              </div>
              <article
                sx={{
                  mt: 5,
                  pt: 4,
                  maxWidth: "32em",
                  fontSize: [3, 4, 5],
                  mx: "auto"
                }}
              >
                <a
                  href="https://www.figma.com/blog/behind-the-plugins-sam-mason-de-caires-cloudflare/"
                  sx={{
                    color: "inherit",
                    display: "block",
                    p: 4,
                    textDecoration: "none"
                  }}
                >
                  <span
                    sx={{
                      fontWeight: 700,
                      display: "block",
                      fontSize: [4, 5, 6]
                    }}
                  >
                    An interview with the team at Figma
                  </span>
                  <span
                    sx={{
                      display: "block",
                      lineHeight: 1.5,
                      fontSize: [3, 4, 4],
                      fontWeight: 700,
                      mb: 4,
                      mt: 3
                    }}
                  >
                    "I find the idea of a design tool with an API to be an
                    interesting one. Things that are often tedious and done by
                    hand can easily be automated if we have access to the
                    underlying code of the tool, therefore giving designers more
                    time to work on the meaningful parts of their process, like
                    designing."
                    <span
                      sx={{
                        color: primary,
                        mt: 3,
                        fontSize: 4,
                        display: "block",
                        mb: 0,
                        fontWeight: 700
                      }}
                    >
                      Read More
                    </span>
                  </span>
                </a>
              </article>
            </div>
          </section>
        </Fragment>
      )
  }
}

export default SectionFigma
