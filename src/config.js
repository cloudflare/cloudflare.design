import React, { createContext, useState, useContext } from "react";
import get from "lodash/get";
import { jsx as emotion } from "@emotion/core";
import css from "@styled-system/css";
import produce from "immer";

const ConfigContext = createContext();

const getConfigValues = (sx, theme) => {
  return Object.entries(sx).reduce((acc, [key, value]) => {
    const themeValue = get(theme, value);
    if (themeValue) {
      return { ...acc, [key]: themeValue };
    }
    return { ...acc, [key]: value };
  }, {});
};

const getCSS = props => {
  if (!props.sx && !props.css) return undefined;
  return theme => {
    const sx = getConfigValues(props.sx, theme);
    const styles = css(sx)(theme);
    const raw = typeof props.css === "function" ? props.css(theme) : props.css;
    return [styles, raw];
  };
};

const parseProps = props => {
  if (!props) return null;
  const next = {};
  for (let key in props) {
    if (key === "sx") continue;
    next[key] = props[key];
  }
  const css = getCSS(props);
  if (css) next.css = css;
  return next;
};

export const jsx = (type, props, ...children) =>
  emotion.apply(undefined, [type, parseProps(props), ...children]);

export const ConfigProvider = ({ initialConfig, children }) => {
  const [config, setConfig] = useState(initialConfig);
  const handleSetConfig = newValue => setConfig(newValue);
  return (
    <ConfigContext.Provider value={{ config, setConfig: handleSetConfig }}>
      <ConfigContext.Consumer>
        {({ config }) => children(config)}
      </ConfigContext.Consumer>
    </ConfigContext.Provider>
  );
};

export const useConfig = () => {
  const { config, setConfig } = useContext(ConfigContext);
  const handleSetConfig = newValue =>
    setConfig(produce(draft => ({ ...draft, ...newValue })));
  return { config, setConfig: handleSetConfig };
};

export const useVariant = key => {
  const { config, setConfig } = useContext(ConfigContext);
  const variant = get(config, `variants[${key}]`);
  const setVariant = value => {
    setConfig(
      produce(draft => {
        draft.variants[key] = value;
      })
    );
  };
  return { variant, setVariant };
};

export default jsx;
