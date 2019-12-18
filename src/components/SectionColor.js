/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { useVariant, useColorMode } from "../config";
import Card from "./Card";
import Text from "./Text";
import PickerUIs from "./PickerUIs";

const sectionKey = "colorSection";

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
];

const SectionHeader = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey, props.variant);
  const { background, text, border } = useColorMode(sectionKey, props.colorMode);

  switch (variant) {
    case 0:
    default:
      return (
        <>
          <section
            sx={{
              pb: [5, 6],
              py: [5, 5, 6],
              px: 4,
              backgroundColor: background,
              borderBottom: '1px solid',
              borderColor: border,
              color: text
            }}
          >
            {showUI && (
              <PickerUIs variants={variants} sectionKey={sectionKey} />
            )}
            <h3
              sx={{
                color: text,
                fontSize: [3, 5, 6],
                textAlign: "center",
                mb: [4, 4, 5]
              }}
            >
              Color
            </h3>
            <Text>
              Tools, experiments, and documentation from our work with color.
            </Text>
            <div sx={{ mt: 5, mx: "auto", maxWidth: "64em" }}>
              <div
                sx={{
                  display: "flex",
                  flexWrap: ["wrap", "nowrap"],
                  px: [3, 3]
                }}
              >
                <div sx={{ px: 3, width: ["100%", "50%"], mb: 4 }}>
                  <Card
                    title="Color"
                    text="Our open source app for building and previewing accessible color palettes"
                    image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/color-icons-cover.jpg"
                  />
                </div>
                <div sx={{ px: 3, width: ["100%", "50%"], mb: 4 }}>
                  <Card
                    title="Thinking about color"
                    text="Notes and documentation from our journey exploring color systems"
                    image="https://blog-cloudflare-com-assets.storage.googleapis.com/2019/12/gradient.jpg"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      );
    case 1:
      return (
        <>
          <section
            sx={{
              py: 3,
              px: [4, 3, 3],
              borderBottom: "1px solid",
              borderColor: border,
              backgroundColor: background,
              color: text
            }}
          >
            {showUI && (
              <PickerUIs variants={variants} sectionKey={sectionKey} />
            )}
            <div sx={{ maxWidth: "96em", mx: "auto", py: [4, 5, 6] }}>
              <div
                sx={{
                  px: 3,
                  maxWidth: "32em",
                  fontSize: [5, 6, 6],
                  mx: "auto"
                }}
              >
                <h3 sx={{ mt: 0, fontSize: [5, 7, 96], mb: 3, color: text }}>
                  Color
                </h3>
                <p
                  sx={{
                    fontSize: [4, 6, 6],
                    maxWidth: "32em",
                    lineHeight: 1.5,
                    fontWeight: [400, 600, 600]
                  }}
                >
                  Tools, experiments, and documentation from our work around
                  designing an accessible color system for flexible theming.
                </p>
              </div>
              <div sx={{ display: "flex", flexWrap: ["wrap", "nowrap"] }}>
                <div sx={{ width: ["100%", "50%"], mb: [4, 0], p: 3 }}>
                  <a
                    href="https://cloudflare.design/color"
                    sx={{
                      backgroundImage:
                        "url(https://cloudflare-assets.s3.us-east-1.amazonaws.com/color-icons-cover.jpg)",
                      backgroundSize: "cover",
                      backgroundPosition: 'center center',
                      display: "block",
                      height: "100%",
                      minHeight: [256, 320, 480]
                    }}
                  ></a>
                </div>
                <div sx={{ width: ["100%", "50%"], mb: [4, 0], p: 3 }}>
                  <a
                    href="https://cloudflare.design/color/thinking"
                    sx={{
                      backgroundImage:
                        "url(https://blog-cloudflare-com-assets.storage.googleapis.com/2019/12/gradient.jpg)",
                      backgroundPosition: 'center center',
                      backgroundSize: "cover",
                      display: "block",
                      height: "100%",
                      minHeight: [256, 320, 480]
                    }}
                  ></a>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    case 2:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section
            sx={{
              py: [5, 6, 7],
              px: 4,
              borderBottom: '1px solid',
              borderColor: border,
              bg: background,
              color: text
            }}
            {...props}
          >
            <div sx={{ mx: "auto", maxWidth: "96em", display: "flex" }}>
              <div>
                <h1
                  sx={{
                    borderTop: "8px solid",
                    pt: 4,
                    mt: 0,
                    mb: 3,
                    fontSize: 8
                  }}
                >
                  Color
                </h1>
                <p
                  sx={{
                    maxWidth: "18em",
                    fontSize: 5,
                    lineHeight: 1.25,
                    fontWeight: 500
                  }}
                >
                  Tools, experiments, and documentation from our work with
                  color.
                </p>
              </div>
            </div>
          </section>
        </>
      );
  }
};

export default SectionHeader;
