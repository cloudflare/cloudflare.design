/** @jsx jsx */
import React from "react";
import { jsx } from "../config";

import VariantPicker from "./VariantPicker";
import ColorModePicker from "./ColorModePicker";

const PickerUIs = ({ variants, sectionKey }) => {
  return (
    <>
      <VariantPicker variants={variants} variantKey={sectionKey} />
      <ColorModePicker configKey={sectionKey} />
    </>
  );
};

export default PickerUIs;
