/** @jsx jsx */
import { jsx, useVariant } from "../config";
import toNumber from "lodash/toNumber";

const VariantPicker = ({ variants, variantKey }) => {
  const { variant, setVariant } = useVariant(variantKey);

  const handleSetVariant = e => {
    const optionValue = toNumber(e.target.value);
    setVariant(optionValue);
  };
  return (
    <div>
      <select value={variant} onChange={handleSetVariant}>
        {variants.map(({ label, value }) => (
          <option value={value}>{label}</option>
        ))}
      </select>
    </div>
  );
};

export default VariantPicker;
