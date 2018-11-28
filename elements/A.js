import styled from "react-emotion"
import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  textAlign,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const A = styled.a(
  space,
  width,
  maxWidth,
  display,
  fontSize,
  fontWeight,
  textAlign,
  color,
  alignItems,
  justifyContent,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box",
    textDecoration: "none",
    transition: 'opacity .25s ease-in',
    opacity: 1,
    ":hover": {
      pointer: "cursor",
      opacity: .75
    }
  }
)

A.defaultProps = {
  display: "inline-block",
  bg: "transparent",
  color: "gray.2",
  href: "#0"
}

export default A
