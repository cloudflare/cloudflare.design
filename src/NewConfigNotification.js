/** @jsx jsx */
import { useState } from "react";
import { useConfig, jsx } from "./config";
import useInterval from "./useInterval";
import isEqual from "lodash/isEqual";

const NewConfigNotification = () => {
  const { config } = useConfig();
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useInterval(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        if (!isEqual(config, json)) {
          setUpdateAvailable(true);
        }
      });
  }, 10000);

  if (!updateAvailable) return null;
  return (
    <div
      sx={{
        textAlign: "center",
        bg: "black",
        py: 2,
        border: "1px solid rgba(255,255,255,.05)"
      }}
      onClick={() => window.location.reload()}
    >
      <small>New Config update! Click to refresh</small>
    </div>
  );
};

export default NewConfigNotification;
