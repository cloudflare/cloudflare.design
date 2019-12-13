/** @jsx jsx */
import React from "react";
import { jsx, useVariant } from "../config";
import data from "../data";
import Card from "./Card";
import Text from "./Text";
import IconLink from "./IconLink";
import PickerUIs from "./PickerUIs";
import useColorMode from "../useColorMode";

const sectionKey = "footerSection";

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

const SectionFooter = ({ showUI, ...props }) => {
  const { variant } = useVariant(sectionKey);
  const { background, text } = useColorMode(sectionKey);

  switch (variant) {
    case 0:
    default:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <footer sx={{ py: 4, borderTop: "1px solid" }}>
            <div sx={{ display: "flex", alignItems: "center" }}>
              <small sx={{ ml: 3, fontSize: 0 }}>{data.copyright}</small>
              <div sx={{ ml: "auto" }}>
                <IconLink />
              </div>
            </div>
          </footer>
        </>
      );
    case 1:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <footer sx={{ py: 4, borderTop: "1px solid" }}>
            <div sx={{ display: "flex", alignItems: "center" }}>
              <small sx={{ ml: 3, fontSize: 0 }}>{data.copyright}</small>
              <div sx={{ ml: "auto" }}>
                <div
                  sx={{
                    fontSize: 7,
                    fontWeight: 800,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <a
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      mr: 3
                    }}
                    href="https://dribbble.com/cloudflare"
                  >
                    Dribbble
                  </a>
                  <a
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      mr: 3
                    }}
                    href="https://github.com/cloudflare"
                  >
                    GitHub
                  </a>
                  <a
                    sx={{
                      color: "inherit",
                      textDecoration: "none",
                      mr: 3
                    }}
                    href="https://twitter.com/cloudflare"
                  >
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </>
      );
    case 2:
      return (
        <>
          {showUI && <PickerUIs variants={variants} sectionKey={sectionKey} />}
          <footer sx={{ py: 4, borderTop: "1px solid" }}>
            <div sx={{ display: "flex", alignItems: "center" }}>
              <small sx={{ ml: 3, fontSize: 0 }}>{data.copyright}</small>
              <div sx={{ ml: "auto" }}>
                <IconLink />
              </div>
            </div>
          </footer>
        </>
      );
  }
};

export default SectionFooter;
