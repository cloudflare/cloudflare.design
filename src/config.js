import React, { createContext, useState, useContext } from "react";
import get from "lodash/get";
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
        draft.colorModes[key] = value;
      })
    );
  };
  const mode = fixed || config.colorModes[key];
  const values = theme.colors.modes[mode];
  return { ...values, mode, setColorMode };
};

export const useVariant = (key, fixed) => {
  const { config, setConfig } = useContext(ConfigContext);
  const variant = fixed || get(config, `variants[${key}]`);

  const setVariant = value => {
    setConfig(
      produce(draft => {
        draft.variants[key] = value;
      })
    );
  };

  return { variant, setVariant };
};

export const useHistory = () => {
  const { config, setConfig } = useContext(ConfigContext);
};
