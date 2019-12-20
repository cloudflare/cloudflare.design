/** @jsx jsx */
import { jsx } from "theme-ui"
import { useVariant } from "../config"

const Card = ({ height, href, title, text, image,border, ...props }) => {
  const { variant } = useVariant("card")
  switch (variant) {
    case "default":
    default:
      return (
        <a
          sx={{
            color: "inherit",
            textDecoration: "none",
            borderRadius: props.borderRadius ? props.borderRadius : 5,
            display: "block",
            boxShadow: '0px 0px 8px rgba(0,0,0,.15)',
            border: '1px solid',
            borderColor: border,
            transition: 'box-shadow .2s ease-in',
            ":hover": {
              boxShadow: '0px 0px 12px rgba(0,0,0,.25)',
              transition: 'box-shadow .2s ease-in',
            },
            ":focus": {
              boxShadow: '0px 0px 12px rgba(0,0,0,.25)',
              transition: 'box-shadow .2s ease-in',
            }
          }}
          href={href}
        >
          <div
            sx={{
              borderRadius: props.borderRadius ? props.borderRadius : 5,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              backgroundSize: "contain",
              backgroundImage: "url(" + image + ")",
              backgroundPosition: "center center",
              height: height,
              bg: 'white',
            }}
          ></div>
        <div sx={{p: 3, borderTop: '1px solid', borderColor: border}}>
          <h4 sx={{mt: 0,  mb: 2 }}>{title}</h4>
          <span>{text}</span>
        </div>
        </a>
      )
    case "test":
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
              backgroundPosition: "center center",
              height: height
            }}
          ></div>
          <h4 sx={{ mt: 3, mb: 2, fontSize: [5, 6, 7] }}>{title}</h4>
          <span sx={{ fontSize: [3, 4, 5] }}>{text}</span>
        </a>
      )
  }
}

Card.defaultProps = {
  variant: "default",
  image:
    "https://cloudflare-assets.s3.us-east-1.amazonaws.com/photos/color-blind.png",
  title: "Color Blind",
  text: "Some default text",
  height: 256,
  href: "#0"
}

export default Card
