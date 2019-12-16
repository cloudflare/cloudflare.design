/** @jsx jsx */
import { jsx } from "theme-ui";

const SiteTitle = ({ text, variant, ...props }) => {
  switch (variant) {
    case "default":
      return (
        <h1
          sx={{
            fontSize: [6, 7, 9],
            lineHeight: 1,
            my: 0,
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
