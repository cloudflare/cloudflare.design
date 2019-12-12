/** @jsx jsx */
import { jsx } from "../config";
import SiteTitle from "./SiteTitle";
import data from "../data";

const SectionHeader = ({ variant, ...props }) => {
  switch (variant) {
    case "default":
      return (
        <header {...props}>
          <SiteTitle text={data.title} />
        </header>
      );
    case 1:
      return (
        <header {...props}>
          <h1
            sx={{
              my: 0,
              fontSize: [7,7,96],              
              borderBottom: '1px solid',
              py: 0,
            }}>Cloudflare Design</h1>
        </header>
      );
    case 2:
      return (
        <header {...props}>
          <h1
            sx={{
              my: 0,
              fontSize: [3,3,4],              
              borderBottom: '1px solid',
              borderColor: 'inherit',
              textAlign: 'center',
              //textTransform: 'uppercase',
              //letterSpacing: '0.05em',
              py: 4,
            }}>Cloudflare Design</h1>
        </header>
      );
  }
};

SectionHeader.defaultProps = {
  variant: "default",
};

export default SectionHeader;
