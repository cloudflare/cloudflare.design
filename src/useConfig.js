import React, { createContext, useState, useContext } from "react";

const ConfigContext = createContext();

export const ConfigProvider = ({ initialConfig, children }) => {
  const [config, setConfig] = useState(initialConfig);
  const handleSetConfig = newValue => setConfig({ ...config, ...newValue });
  return (
    <ConfigContext.Provider value={{ config, setConfig: handleSetConfig }}>
      <ConfigContext.Consumer>
        {({ config }) => children(config)}
      </ConfigContext.Consumer>
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  return useContext(ConfigContext);
};
