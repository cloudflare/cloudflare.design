/** @jsx jsx */
import { jsx, useVariant } from "../config";

const Card = ({ height, href, title, text, image, ...props }) => {
  const { variant } = useVariant("card");
  switch (variant) {
    case "default":
    default:
      return (
        <a
          sx={{
            color: "inherit",
            textDecoration: "none"
          }}
          href={href}
        >
          <div
            sx={{
              borderRadius: props.borderRadius? props.borderRadius: 5,
              backgroundSize: "cover",
              backgroundImage: "url(" + image + ")",
              height: height
            }}
          ></div>
          <h4 sx={{ mt: 3, mb: 2 }}>{title}</h4>
          <span>{text}</span>
        </a>
      );
    case "test":
      test:
      return (
        <a
          sx={{
            color: "inherit",
            textDecoration: "none"
          }}
          href={href}
        >
          <div
            sx={{
              borderRadius: 0,
              backgroundSize: "cover",
              backgroundImage: "url(" + image + ")",
              height: height
            }}
          ></div>
          <h4 sx={{ mt: 3, mb: 2, fontSize: [5,6,7] }}>{title}</h4>
          <span sx={{ fontSize: [3,4,5]}}>{text}</span>
        </a>
      );
  }
};

Card.defaultProps = {
  variant: "default",
  image:
    "https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/color-blind.png",
  title: "Color Blind",
  text: "Some default text",
  height: 256,
  href: "#0"
};

export default Card;
