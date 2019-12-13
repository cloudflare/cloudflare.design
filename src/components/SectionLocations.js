/** @jsx jsx */
import React from "react";
import { jsx, useVariant } from "../config";
import Text from "./Text";
import data from "../data";
import PickerUIs from "./PickerUIs";
import useColorMode from "../useColorMode";

const sectionKey = "locationSection";

const variants = [
  {
    label: "default variant",
    value: 0
  },
  {
    label: "variant 1",
    value: 1
  },
  {
    label: "variant 2",
    value: 2
  }
];

const SectionLocations = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey);
  const { background, text } = useColorMode(sectionKey);

  switch (variant) {
    case 0:
    default:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section sx={{ py: [5, 6] }}>
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
              We're currently growing our Design teams in San Francisco, Austin, London, and Lisbon.
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
              <div sx={{ textAlign: "center" }}>
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
        </>
      );
    case 1:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section>
            <div>
              <div
                sx={{
                  mt: 4,
                  display: "flex",
                  flexWrap: ["wrap", "nowrap"],
                  px: 4
                }}
              >
                <div>
                  <h3
                    sx={{
                      fontSize: [24]
                    }}
                  >
                    Locations
                  </h3>
                  <p sx={{ lineHeight: 1.5 }}>
                    Cloudflare has n offices in y countries. We're currently
                    growing our Design teams in San Francisco, Austin, London,
                    and Lisbon.
                  </p>
                  <h4 sx={{ fontWeight: 700, fontSize: [4, 5, 6], mt: 4 }}>
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
            </div>
          </section>
        </>
      );
    case 2:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section {...props}></section>
        </>
      );
  }
};

export default SectionLocations;
