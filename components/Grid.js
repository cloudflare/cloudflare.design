import React from "react"

import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  height,
  size,
  display,
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridArea,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius
} from "styled-system"

const Div = styled.div(
  space,
  width,
  maxWidth,
  height,
  size,
  display,
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridArea,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,
  fontSize,
  color,
  borders,
  borderColor,
  borderRadius,
  {
    boxSizing: "border-box"
  }
)

const Grid = ({ ...props }) => {
  return <Div {...props}>{props.children}</Div>
}

Grid.defaultProps = {
  display: "grid"
}

export default Grid
