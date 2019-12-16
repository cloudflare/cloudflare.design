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
  },
  {
    label: "variant 3",
    value: 3
  }
];

const SectionHeader = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey, props.variant);
  const { background, text } = useColorMode(sectionKey, props.colorMode);

  switch (variant) {
    case 0:
    default:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header sx={{ display: 'flex', justifyContent: 'center', px: 3, bg: background, color: text, py: [5,6,7] }} {...props}>
            <Logo variant='mark' sx={{ width: 128, mr: 4 }}/><SiteTitle text={data.title} />
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
                borderBottom: "1px solid"
              }}
            >
              <Logo variant="mark" sx={{ mx: 3, width: 160 }} />
              <h1
                sx={{
                  pl: 3,
                  my: 0,
                  fontSize: [7, 7, 96],
                  borderLeft: "1px solid",
                  lineHeight: 1,
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
          <header sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid', py: 4, px: 3, bg: background, color: text }} {...props}>
            <Logo variant='mark' sx={{ width: 48, mr: 3 }} />
            <h1
              sx={{
                my: 0,
                fontSize: [3, 3, 4],
                textAlign: "center",
              }}
            >
              Cloudflare Design
            </h1>
          </header>
        </>
      );
    case 3:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid', py: 4, px: 3, bg: background, color: text }} {...props}>
            <Logo variant='mark' sx={{ width: 48, mr: 3 }} />
            <h1
              sx={{
                my: 0,
                fontSize: [3, 3, 4],
                textAlign: "center",
              }}
            >
              Cloudflare Design
            </h1>
          </header>
        </>
      );
  }
};

export default SectionHeader;
