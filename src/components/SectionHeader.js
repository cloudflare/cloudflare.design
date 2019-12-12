/** @jsx jsx */
import React from "react";
import { jsx, useVariant } from "../config";
import SiteTitle from "./SiteTitle";
import data from "../data";
import VariantPicker from "./VariantPicker";

const variantKey = "headerSection";

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

const SectionHeader = ({ ...props }) => {
  const { variant } = useVariant(variantKey);

  switch (variant) {
    case 0:
    default:
      return (
        <>
          <VariantPicker variants={variants} variantKey={variantKey} />
          <header {...props}>
            <SiteTitle text={data.title} />
          </header>
        </>
      );
    case 1:
      return (
        <>
          <VariantPicker variants={variants} variantKey={variantKey} />
          <header {...props}>
            <h1
              sx={{
                my: 0,
                fontSize: [7, 7, 96],
                borderBottom: "1px solid",
                py: 0
              }}
            >
              Cloudflare Design
            </h1>
          </header>
        </>
      );
    case 2:
      return (
        <>
          <VariantPicker variants={variants} variantKey={variantKey} />
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
