import React, { createContext, useState, useContext } from "react";
import get from "lodash/get";
import set from "lodash/set";
import { useThemeUI } from "theme-ui";
import produce from "immer";

const ConfigContext = createContext();

export const ConfigProvider = ({ initialConfig, children }) => {
  const [config, setConfig] = useState(initialConfig);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  return useContext(ConfigContext);
};

export const useColorMode = (key, fixed) => {
  const { theme } = useThemeUI();
  const { config, setConfig } = useConfig();
  const setColorMode = value => {
    setConfig(
      produce(draft => {
        set(draft, ["colorModes", key], value);
      })
    );
  };
  const mode = typeof fixed !== "undefined" ? fixed : config.colorModes[key];
  const values = theme.colors.modes[mode];
  return { ...values, mode, setColorMode };
};

export const useVariant = (key, fixed) => {
  const { config, setConfig } = useContext(ConfigContext);
  const variant =
    typeof fixed !== "undefined" ? fixed : get(config, `variants[${key}]`);

  const setVariant = value => {
    setConfig(
      produce(draft => {
        set(draft, ["variants", key], value);
      })
    );
  };

  return { variant, setVariant };
};

export const useBorderTop = (key, fixed) => {
  const { config, setConfig } = useContext(ConfigContext);
  const borderTop =
    typeof fixed !== "undefined" ? fixed : get(config, `borderTop[${key}]`);
  const setBorderTop = value => {
    setConfig(
      produce(draft => {
        set(draft, ["borderTop", key], value);
      })
    );
  };

  return { borderTop, setBorderTop };
};

export const useBorderBottom = (key, fixed) => {
  const { config, setConfig } = useContext(ConfigContext);
  const borderBottom =
    typeof fixed !== "undefined" ? fixed : get(config, `borderBottom[${key}]`);
  const setBorderBottom = value => {
    setConfig(
      produce(draft => {
        set(draft, ["borderBottom", key], value);
      })
    );
  };

  return { borderBottom, setBorderBottom };
};
