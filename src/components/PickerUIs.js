/** @jsx jsx */
import React from "react";
import { jsx } from "../config";

import VariantPicker from "./VariantPicker";
import ColorModePicker from "./ColorModePicker";

const PickerUIs = ({ variants, sectionKey }) => {
  return (
    <div sx={{top: '8px', left: '8px', borderRadius: 5, fontSize: 1, position: 'absolute', p: 3, bg: 'black', boxShadow: 'rgba(50, 50, 93, 0.247059) 0px 13px 27px -5px, rgba(0, 0, 0, 0.298039) 0px 8px 16px -8px, rgba(0, 0, 0, 0.0235294) 0px -6px 16px -6px'}}>
      <div sx={{display: 'flex'}}>
        <label><span>Variant</span>
          <VariantPicker variants={variants} variantKey={sectionKey} />
        </label>
        <div sx={{ ml: 3 }}>
          <label><span>Color Mode</span>
            <ColorModePicker configKey={sectionKey} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PickerUIs;
