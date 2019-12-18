/** @jsx jsx */
import { jsx } from "theme-ui";

const NewConfigNotification = ({ show }) => {
  if (!show) return null;
  return (
    <div
      sx={{
        textAlign: "center",
        bg: "black",
        color: "white",
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
