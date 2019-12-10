/** @jsx jsx */
import jsx from "./jsx";
import { useConfig } from "./useConfig";

const NewConfigNotification = () => {
  const { setConfig } = useConfig();

  return (
    // We can then use the hook to update a value with a new one basec on the key and a valid theme value
    <div onClick={() => setConfig({ colorPrimary: "blue.4" })}>
      New Config update! Click to refresh
    </div>
  );
};

export default NewConfigNotification;
