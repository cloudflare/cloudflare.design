/** @jsx jsx */
import { jsx } from "../config";

const Text = ({ variant, ...props }) => {
  switch (variant) {
    case "default":
      return (
        <p
          sx={{
            fontSize: [4, 5, 7],
            fontWeight: 800,
            maxWidth: "20em",
            mx: "auto"
          }}
        >
          {props.children}
        </p>
      );
  }
};

Text.defaultProps = {
  variant: "default",
  text: "Site Title"
};

export default Text;
