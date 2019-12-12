/** @jsx jsx */
import { useState } from "react";
import { jsx } from "../config";
import useInterval from "../useInterval";

const NewConfigNotification = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [versionId, setVersionId] = useState();

  useInterval(() => {
    fetch("https://cloudflare-design-read.cloudflare-ui.workers.dev")
      .then(res => res.json())
      .then(json => {
        if (!versionId) {
          setVersionId(json.id);
        }
        if (versionId && versionId !== json.id) {
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
