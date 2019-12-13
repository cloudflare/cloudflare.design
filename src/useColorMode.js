import { useConfig } from "./config";
import { useThemeUI } from "theme-ui";

const useColorMode = sectionKey => {
  const { theme } = useThemeUI();
  const { config } = useConfig();
  const sectionMode = config[sectionKey];

  const mode = theme.colors.modes[sectionMode];
  return mode;
};

export default useColorMode;
