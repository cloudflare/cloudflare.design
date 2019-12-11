/** @jsx jsx */
import { jsx, useVariant } from "../config";

const SiteTitle = ({ text, variant, ...props }) => {
  const { setVariant } = useVariant("card");
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
          <button onClick={() => setVariant("test")}>Set Variant</button>
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
