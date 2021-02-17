import paletteDocs2Img from "./images/palette-docs-2.png"
import paletteDocsImg from "./images/palette-docs.png"
import cloudflarePreviewImg from "./images/cloudflare-preview.png"
import lisbonImg from "./images/lisbon-1.jpg"
import londonImg from "./images/london-1.jpg"
import sfImg from "./images/sf.jpg"
import austinImg from "./images/austin-1.jpg"

const data = {
  title: "Cloudflare Design",
  subtitle: "",
  copyright: "© 2021 Cloudflare, Inc.",
  locations: [
    {
      city: "Lisbon",
      image: lisbonImg
    },
    {
      city: "London",
      image: londonImg
    },
    {
      city: "San Francisco",
      image: sfImg
    },
    {
      city: "Austin",
      image: austinImg
    }
  ],
  social: [
    {
      type: "github",
      name: "GitHub",
      username: "cloudflare",
      url: "https://github.com/cloudflare"
    },
    {
      type: "twitter",
      name: "Twitter",
      username: "@cloudflare",
      url: "https://twitter.com/cloudflare"
    },
    {
      type: "dribbble",
      name: "Dribbble",
      username: "@cloudflare",
      url: "https://dribbble.com/cloudflare"
    }
  ],
  dribbble: [
    {
      href:
        "https://dribbble.com/shots/6619614-Color-palette-documentation-table-view",
      image: paletteDocs2Img
    },
    {
      href: "https://dribbble.com/shots/6556301-Color-palette-documentation",
      image: paletteDocsImg
    },
    {
      href:
        "https://dribbble.com/shots/3493640-Cloudflare-Save-The-Internet-1x",
      image: ""
    },
    {
      href: "https://dribbble.com/shots/3342724-Cloudflare-Simple-Wallpaper",
      image: cloudflarePreviewImg
    },
    {
      href: "https://dribbble.com/shots/3353651-Rainbow-Cloud-Preview",
      image: ""
    }
  ],
  tarot: [
    {
      front: "https://cloudflare.design/fool-front.png",
      back: "https://cloudflare.design/fool-back.png"
    },
    {
      front: "https://cloudflare.design/hermit-front.png",
      back: "https://cloudflare.design/hermit-back.png"
    },
    {
      front: "https://cloudflare.design/lovers-front.png",
      back: "https://cloudflare.design/lovers-back.png"
    },
    {
      front: "https://cloudflare.design/moon-front.png",
      back: "https://cloudflare.design/moon-back.png"
    },
    {
      front: "https://cloudflare.design/tower-front.png",
      back: "https://cloudflare.design/tower-back.png"
    },
    {
      front: "https://cloudflare.design/wheel-front.png",
      back: "https://cloudflare.design/wheel-back.png"
    }
  ]
}

export default data
