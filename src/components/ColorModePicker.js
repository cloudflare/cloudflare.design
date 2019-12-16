/** @jsx jsx */
import { jsx } from "theme-ui";
import { useColorMode } from "../config";
import { useThemeUI } from "theme-ui";
import toNumber from "lodash/toNumber";

const ColorModePicker = ({ configKey }) => {
  const { theme } = useThemeUI();
  const { setColorMode, mode } = useColorMode(configKey);

  const handleSetColorMode = e => {
    const optionValue = toNumber(e.target.value);
    setColorMode(optionValue);
  };

  return (
    <div>
      <select value={mode} onChange={handleSetColorMode}>
        {Object.keys(theme.colors.modes).map((m, i) => (
          <option key={i} value={m}>
            Color mode: {m}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorModePicker;
