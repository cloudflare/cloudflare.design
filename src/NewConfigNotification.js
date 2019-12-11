/** @jsx jsx */
import { useConfig, jsx } from "./config";

const NewConfigNotification = () => {
  const { setConfig } = useConfig();

  return (
    // We can then use the hook to update a value with a new one basec on the key and a valid theme value
    <div
      sx={{
        textAlign: "center",
        bg: "black",
        py: 2,
        border: "1px solid rgba(255,255,255,.05)"
      }}
      onClick={() =>
        setConfig({ colorPrimary: "gray.0", colorSecondary: "white" })
      }
    >
      <small>New Config update! Click to refresh</small>
    </div>
  );
};

export default NewConfigNotification;
