/** @jsx jsx */
import React from "react";
import { jsx, useVariant } from "../config";
import Card from "./Card";
import Text from "./Text";
import VariantPicker from "./VariantPicker";

const variantKey = "figmaSection";

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

const SectionFooter = ({ ...props }) => {
  const { variant } = useVariant(variantKey);
  switch (variant) {
    case 0:
    default:
      return (
        <>
          <VariantPicker variants={variants} variantKey={variantKey} />
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
          <VariantPicker variants={variants} variantKey={variantKey} />
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
    case 2:
      return (
        <>
          <VariantPicker variants={variants} variantKey={variantKey} />
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
