/** @jsx jsx */
import { jsx } from "../config";

const NewConfigNotification = ({ show }) => {
  if (!show) return null;
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
