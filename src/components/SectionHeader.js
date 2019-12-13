/** @jsx jsx */
import React from "react";
import { jsx, useVariant } from "../config";
import SiteTitle from "./SiteTitle";
import data from "../data";
import PickerUIs from "./PickerUIs";
import useColorMode from "../useColorMode";
import Logo from './Logo'

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
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header {...props}>
            <SiteTitle text={data.title} />
          </header>
        </>
      );
    case 1:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <header {...props}>
              <div sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid' }}>
              <Logo variant='mark' sx={{ mx: 3, width: 160 }} />
              <h1
                sx={{
                  pl: 3,
                  my: 0,
                  fontSize: [7, 7, 96],
                  borderLeft: '1px solid',
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
          <header {...props}>
            <h1
              sx={{
                my: 0,
                fontSize: [3, 3, 4],
                borderBottom: "1px solid",
                borderColor: "inherit",
                textAlign: "center",
                //textTransform: 'uppercase',
                //letterSpacing: '0.05em',
                py: 4
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
