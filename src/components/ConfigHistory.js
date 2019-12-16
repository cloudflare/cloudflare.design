/** @jsx jsx */
import { jsx } from "theme-ui";
import { useConfig } from "../config";

const ConfigHistory = ({ history }) => {
  const { config, setConfig } = useConfig();

  const handleSetConfig = i => () => {
    const { history } = config;

    setConfig({ ...history[i].config });
  };

  return (
    <div sx={{ p: 4 }}>
      <h4 sx={{ mt:0, mb: 3 }}>Versions</h4>
    <div sx={{flexWrap: 'wrap', display: 'flex', mx: -3 }}>
      {history.map((h, i) => (
          <div sx={{ width: '12.5%', px: 3 }}>
          <button 
            sx={{ 
              px: 0,
              appearance: 'none',
              webkitAppearance: 'none', 
              bg: 'transparent',
              width: '100%',
              color: 'white',
              borderTop: 0,
              borderLeft: 0,
              borderRight: 0,
              borderBottom: '0px solid',
              textAlign: 'left',
              fontSize: 1,
              mb: 3,
              cursor: 'pointer',
              transition: 'color .2s ease-in',
              ":hover": {
                color: 'indigo.5',

              }

            }}
            onClick={handleSetConfig(i)}>v0.0.{i}</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ConfigHistory;
