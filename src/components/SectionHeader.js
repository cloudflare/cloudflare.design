/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { useVariant } from "../config";
import SiteTitle from "./SiteTitle";
import data from "../data";
import PickerUIs from "./PickerUIs";
import { useColorMode } from "../config";
import Logo from "./Logo";

const sectionKey = "headerSection";

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
  }
];

const SectionHeader = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey, props.variant);
  const { background, text, primary } = useColorMode(
    sectionKey,
    props.colorMode
  );

  switch (variant) {
    case 0:
    default:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              display: "flex",
              justifyContent: "center",
              px: 3,
              bg: background,
              color: text,
              py: [5, 6, 7]
            }}
            {...props}
          >
            <Logo variant="mark" sx={{ width: [64, 96, 128], mr: [3, 4] }} />
            <SiteTitle text={data.title} />
          </header>
        </>
      );
    case 1:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header {...props}>
            <div
              sx={{
                bg: background,
                color: text,
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid",
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
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  py: 0
                }}
              >
                Cloudflare Design
              </h1>
            </div>
          </header>
        </>
      );
    case 2:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid",
              py: 4,
              px: 3,
              bg: background,
              color: text
            }}
            {...props}
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
        </>
      );
    case 3:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderBottom: "1px solid",
              py: 4,
              px: 3,
              bg: background,
              color: text
            }}
            {...props}
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
        </>
      );
    case 4:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{ bg: background, color: text, py: [5, 6, 7] }}
            {...props}
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
        </>
      );
    case 5:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header
            sx={{ bg: background, color: text, py: [5, 6, 7] }}
            {...props}
          >
            <div>
              <div
                sx={{
                  mx: "auto",
                  mb: 3,
                  borderRadius: 9999,
                  border: "1px solid",
                  bg: "white",
                  borderColor: text,
                  height: 128,
                  width: 128,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Logo
                  variant="mark"
                  sx={{ width: 96, position: "relative", top: "-8px" }}
                />
              </div>
              <h1
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: [1, 1, 1],
                  fontWeight: 400,
                  lineHeight: [1, 0.995],
                  mt: 0,
                  mb: [4, 0],
                  textAlign: "center"
                }}
              >
                Design
              </h1>
            </div>
          </header>
        </>
      );
  }
};

export default SectionHeader;
