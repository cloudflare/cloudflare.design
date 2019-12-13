/** @jsx jsx */
import React from "react";
import { jsx, useVariant } from "../config";
import Card from "./Card";
import PickerUIs from "./PickerUIs";
import useColorMode from "../useColorMode";

const sectionKey = "colorSection";

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

const SectionHeader = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey);
  const { background, text } = useColorMode(sectionKey);

  switch (variant) {
    case 0:
    default:
      return (
        <>
          <section
            sx={{ pb: [5, 6], px: [4, 0, 0], backgroundColor: background }}
          >
            {showUI && (
              <PickerUIs variants={variants} sectionKey={sectionKey} />
            )}
            <h3
              sx={{
                color: text,
                fontSize: [3, 5, 6],
                textAlign: "center",
                mb: 5
              }}
            >
              Color
            </h3>
            <div sx={{ mx: "auto", maxWidth: "64em" }}>
              <div
                sx={{ display: "flex", flexWrap: ["wrap", "nowrap"], mx: -3 }}
              >
                <div sx={{ px: 3, width: ["100%", "50%"], mb: 4 }}>
                  <Card
                    title="Color"
                    text="Our open source app for building and previewing accessible color palettes"
                    image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/palette-docs-2.png"
                  />
                </div>
                <div sx={{ px: 3, width: ["100%", "50%"], mb: 4 }}>
                  <Card
                    title="Thinking about color"
                    text="Notes and documentation from our journey exploring color systems"
                    image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/new-scales.png"
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
              borderColor: "inherit",
              backgroundColor: background
            }}
          >
            {showUI && (
              <PickerUIs variants={variants} sectionKey={sectionKey} />
            )}
            <div>
              <div sx={{ display: "flex", flexWrap: ["wrap", "nowrap"] }}>
                <div sx={{ px: 3, width: "33%" }}>
                  <h3 sx={{ fontSize: [3, 5, 6], color: text }}>Color</h3>
                </div>
                <div sx={{ width: ["100%", "50%"], mb: [4, 0], p: 3 }}>
                  <a
                    href="https://cloudflare.design/color"
                    sx={{
                      backgroundImage:
                        "url(https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/palette-docs-2.png)",
                      backgroundSize: "cover",
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
                        "url(https://cloudflare-assets.s3.us-east-1.amazonaws.com/new-scales.png)",
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
          <section {...props}></section>
        </>
      );
  }
};

export default SectionHeader;
