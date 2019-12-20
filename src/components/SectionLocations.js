/** @jsx jsx */
import { Fragment } from "react"
import { jsx } from "theme-ui"
import {
  useVariant,
  useColorMode,
  useBorderBottom,
  useBorderTop
} from "../config"
import Text from "./Text"
import data from "../data"
import PickerUIs from "./PickerUIs"

const sectionKey = "locationSection"

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
  }
]

const SectionLocations = ({ showUI, ...props }) => {
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
          <section
            sx={{
              py: [5, 6],
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
                mb: 5
              }}
            >
              Locations
            </h3>
            <Text>
              We're currently growing our Design teams in San Francisco, Austin,
              London, and Lisbon.
            </Text>
            <div sx={{ mx: "auto", maxWidth: "64em", width: "100%" }}>
              <div
                sx={{
                  mt: 4,
                  display: "flex",
                  flexWrap: ["wrap", "nowrap"],
                  px: 4
                }}
              >
                {data.locations.map((location, index) => (
                  <article key={index} sx={{ width: ["50%", "25%"], px: 0 }}>
                    <div
                      sx={{
                        backgroundSize: "cover",
                        backgroundImage: "url(" + location.image + ")",
                        backgroundPosition: "center center",
                        pt: [6, 7],
                        pb: [6, 6],
                        px: 3,
                        width: "100%"
                      }}
                    />
                    <h4 sx={{ textAlign: ["center", "left"] }}>
                      {location.city}
                    </h4>
                  </article>
                ))}
              </div>
              <div sx={{ textAlign: "center", px: 4 }}>
                <h4 sx={{ fontWeight: 700, fontSize: [4, 5, 6], mt: 6 }}>
                  Want to come work with us? We'd love to hear from you.
                </h4>
                <a
                  sx={{
                    display: "inline-block",
                    borderRadius: "7px",
                    border: "1px solid",
                    color: "inherit",
                    fontWeight: 800,
                    textDecoration: "none",
                    px: 4,
                    py: 3
                  }}
                  href="https://cloudflare.com/careers/departments/design"
                >
                  We're Hiring
                </a>
              </div>
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
              px: [4, 3, 3],
              py: [4, 5, 6],
              borderColor: border,
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid"
            }}
          >
            <div sx={{ maxWidth: "96em", mx: "auto" }}>
              <div
                sx={{
                  px: 3,
                  maxWidth: "32em",
                  fontSize: [4, 6, 6],
                  mx: "auto"
                }}
              >
                <h3
                  sx={{
                    fontSize: [5, 7, 96],
                    mb: 3,
                    mt: 0
                  }}
                >
                  Locations
                </h3>
                <p
                  sx={{
                    my: 0,
                    lineHeight: 1.5,
                    fontSize: [4, 6, 6],
                    fontWeight: [400, 600, 600]
                  }}
                >
                  We're currently growing our Design teams in our San Francisco,
                  Austin, London, and Lisbon offices.
                </p>
                <h4 sx={{ fontWeight: 400, fontSize: [4], mt: [4, 5] }}>
                  Want to come work with us? We'd love to hear from you.
                </h4>
                <a
                  sx={{
                    display: ["block", "inline-block"],
                    textAlign: "center",
                    borderRadius: "5px",
                    border: "1px solid",
                    color: "inherit",
                    fontWeight: 700,
                    textDecoration: "none",
                    px: 4,
                    py: 3,
                    fontSize: 3
                  }}
                  href="https://cloudflare.com/careers/departments/design"
                >
                  We're Hiring
                </a>
              </div>
              <div
                sx={{
                  mt: [5, 6, 6],
                  display: "flex",
                  flexWrap: ["wrap", "nowrap"]
                }}
              >
                {data.locations.map((location, index) => (
                  <article key={index} sx={{ width: ["50%", "25%"], px: 3 }}>
                    <div
                      sx={{
                        backgroundSize: "cover",
                        backgroundImage: "url(" + location.image + ")",
                        backgroundPosition: "center center",
                        pt: [6, 7],
                        pb: [6, 6],
                        width: "100%"
                      }}
                    />
                    <h4
                      sx={{
                        mt: 3,
                        fontSize: [3, 4, 5],
                        fontWeight: 800,
                        textAlign: ["center", "left"]
                      }}
                    >
                      {location.city}
                    </h4>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Fragment>
      )
    case 2:
      return (
        <Fragment>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section
            sx={{
              bg: background,
              color: text,
              borderBottom: borderBottom && "1px solid",
              borderTop: borderTop && "1px solid",
              borderColor: border
            }}
            {...props}
          >
            <h3>Locations</h3>
          </section>
        </Fragment>
      )
  }
}

export default SectionLocations
