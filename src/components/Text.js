/** @jsx jsx */
import { jsx } from "theme-ui"

const Text = ({ variant, ...props }) => {
  switch (variant) {
    case "default":
    default:
      return (
        <p
          sx={{
            fontSize: [4, 5, 7],
            fontWeight: 800,
            maxWidth: "20em",
            mx: "auto",
            lineHeight: 1.25
          }}
        >
          {props.children}
        </p>
      )
  }
}

Text.defaultProps = {
  variant: "default",
  text: "Site Title"
}

export default Text
