/** @jsx jsx */
import { jsx, useConfig } from "../config";

const ConfigHistory = ({ history }) => {
  const { config, setConfig } = useConfig();

  const handleSetConfig = i => () => {
    const { history } = config;

    setConfig({ ...history[i].config });
  };

  return (
    <div>
      {history.map((h, i) => (
        <div>
          <button onClick={handleSetConfig(i)}>History: {i}</button>
        </div>
      ))}
    </div>
  );
};

export default ConfigHistory;
