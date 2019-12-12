/** @jsx jsx */
import { jsx } from "../config";

const SiteTitle = ({ text, variant, ...props }) => {
  switch (variant) {
    case "default":
      return (
        <h1
          sx={{
            fontSize: [6, 7, 9],
            textAlign: "center",
            mt: 0,
            py: [5, 6, 7]
          }}
        >
          {text}
        </h1>
      );
  }
};

SiteTitle.defaultProps = {
  variant: "default",
  text: "Site Title"
};

export default SiteTitle;
