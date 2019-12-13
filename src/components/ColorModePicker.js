/** @jsx jsx */
import { jsx, useConfig } from "../config";
import { useThemeUI } from "theme-ui";
import toNumber from "lodash/toNumber";

const ColorModePicker = ({ configKey }) => {
  const { theme } = useThemeUI();
  const { config, setConfig } = useConfig();
  const handleSetColorMode = e => {
    const optionValue = toNumber(e.target.value);
    setConfig({ [configKey]: optionValue });
  };

  return (
    <div>
      <select value={config[configKey]} onChange={handleSetColorMode}>
        {Object.keys(theme.colors.modes).map((mode, i) => (
          <option key={i} value={mode}>
            Color mode: {mode}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ColorModePicker;
