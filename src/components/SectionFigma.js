/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { useVariant, useColorMode } from "../config";
import Card from "./Card";
import Text from "./Text";
import PickerUIs from "./PickerUIs";

const sectionKey = "figmaSection";

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

const SectionFigma = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey);
  const { background, text } = useColorMode(sectionKey);

  switch (variant) {
    case 0:
    default:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section sx={{py: [5,6], color: text, bg: background }}>
            <h3
              sx={{
                fontSize: [3, 5, 6],
                textAlign: "center",
                mb: 5
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
                    image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/color-blind.png"
                    height={192}
                  />
                </div>
                <div sx={{ px: [4, 3], mb: [4, 0] }}>
                  <Card
                    href="https://www.figma.com/c/plugin/733062974250826253/Translate"
                    title="Translate"
                    text="Test your UI against different languages to see what may break."
                    image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/translate.png"
                    height={192}
                  />
                </div>
                <div sx={{ px: [4, 3], mb: [4, 0] }}>
                  <Card
                    href="https://www.figma.com/c/plugin/731451122947612104/Charts"
                    title="Charts"
                    text="Preview your designs in 8 different types of color vision deficiency."
                    image="https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/charts.png"
                    height={192}
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
                      src="https://cloudflare-assets.s3.us-east-1.amazonaws.com/sam-figma.jpg"
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
        </>
      );
    case 1:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <section sx={{ color: text, bg: background }} >
            <div sx={{ borderBottom: "1px solid", borderColor: "inherit" }}>
              <div sx={{ display: "flex", flexWrap: ["wrap", "nowrap"], p: 3 }}>
                <div sx={{ width: "100%", p: 3 }}>
                  <a
                    href="https://www.figma.com/c/plugin/733343906244951586/Color-Blind"
                    title="Color Blind"
                    sx={{
                      display: "block",
                      backgroundImage:
                        "url(https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/color-blind.png)",
                      backgroundSize: "cover",
                      minHeight: 192,
                      width: "100%",
                      height: "100%"
                    }}
                  />
                </div>
                <div sx={{ width: ["50%", "100%"], p: 3 }}>
                  <a
                    href="https://www.figma.com/c/plugin/733062974250826253/Translate"
                    title="Translate"
                    sx={{
                      display: "block",
                      backgroundImage:
                        "url(https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/translate.png)",
                      backgroundSize: "cover",
                      minHeight: 192,
                      width: "100%",
                      height: "100%"
                    }}
                  />
                </div>
                <div sx={{ width: ["50%", "100%"], p: 3 }}>
                  <a
                    href="https://www.figma.com/c/plugin/731451122947612104/Charts"
                    title="Color Blind"
                    sx={{
                      display: "block",
                      backgroundImage:
                        "url(https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/charts.png)",
                      backgroundSize: "cover",
                      minHeight: 192,
                      width: "100%",
                      height: "100%"
                    }}
                  />
                </div>

                <div sx={{ px: 3, width: ["100%", "33%"] }}>
                  <h3
                    sx={{
                      fontSize: [3, 4, 5]
                    }}
                  >
                    Figma Plugins
                  </h3>
                  <p sx={{ lineHeight: 1.5 }}>
                    As we've been making the transition to Figma, we've been
                    building some plugins to help us with common workflows.
                  </p>
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
          <section {...props}>
            <h3 sx={{my: 0}}>FIGMA</h3>
          </section>
        </>
      );
  }
};

export default SectionFigma;
