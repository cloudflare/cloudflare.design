/** @jsx jsx */
import { jsx } from 'theme-ui'

const SiteTitle = ({ text, variant, ...props }) => {
  switch (variant) {
    case 'default': 
      return (
        <h1 sx={{ 
          fontSize: [4,5,8],
          textAlign: 'center', 
          mt: 0, 
          py: [5,6,7]
        }}>{text}</h1> 
      )
  }
}

SiteTitle.defaultProps = {
  variant: 'default',
  text: "Site Title"
}

export default SiteTitle
