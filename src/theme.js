const theme = {
  containerWidth: "72rem",
  breakpoints: ["36em", "48em", "64em"],
  radii: [0, 3, 5, 9999],
  lineHeight: [1, 1.25, 1.5],
  measure: ["20em", "28em", "34em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [10, 12, 14, 16, 20, 24, 32, 48, 64, 96, 128, 192 ],
  font: {
    sansSerif:
      "-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,'Helvetica Neue',Arial,sans-serif",
    serif: "serif",
    mono: "Monaco, monospace"
  },
  fontWeights: [100, 400, 600, 700, 800],
  textStyles: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.2em"
    }
  },
  colors: {
    red: [
      "#430c15",
      "#711423",
      "#a01c32",
      "#bf223c",
      "#da304c",
      "#e35f75",
      "#ec93a2",
      "#f3bac3",
      "#f9dce1",
      "#fcf0f2"
    ],
    orange: [
      "#341a04",
      "#5b2c06",
      "#813f09",
      "#a24f0b",
      "#b6590d",
      "#e06d10",
      "#f4a15d",
      "#f8c296",
      "#fbdbc1",
      "#fdf1e7"
    ],
    gold: [
      "#2c1c02",
      "#573905",
      "#744c06",
      "#8e5c07",
      "#a26a09",
      "#c7820a",
      "#f4a929",
      "#f8cd81",
      "#fbe2b6",
      "#fdf3e2"
    ],
    green: [
      "#0f2417",
      "#1c422b",
      "#285d3d",
      "#31724b",
      "#398557",
      "#46a46c",
      "#79c698",
      "#b0ddc2",
      "#d8eee1",
      "#eff8f3"
    ],
    cyan: [
      "#0c2427",
      "#164249",
      "#1d5962",
      "#26727e",
      "#2b818e",
      "#35a0b1",
      "#66c3d1",
      "#a5dce4",
      "#d0edf1",
      "#e9f7f9"
    ],
    blue: [
      "#0c2231",
      "#163d57",
      "#1f567a",
      "#276d9b",
      "#2c7cb0",
      "#479ad1",
      "#7cb7de",
      "#add2eb",
      "#d6e9f5",
      "#ebf4fa"
    ],
    indigo: [
      "#181e34",
      "#2c365e",
      "#404e88",
      "#5062aa",
      "#6373b6",
      "#8794c7",
      "#a5aed5",
      "#c8cde5",
      "#e0e3f0",
      "#f1f3f8"
    ],
    violet: [
      "#2d1832",
      "#502b5a",
      "#753f83",
      "#8e4c9e",
      "#9f5bb0",
      "#b683c3",
      "#c9a2d2",
      "#dbc1e1",
      "#ebddee",
      "#f7f1f8"
    ],
    gray: [
      "#1d1f20",
      "#36393a",
      "#4e5255",
      "#62676a",
      "#72777b",
      "#92979b",
      "#b7bbbd",
      "#d5d7d8",
      "#eaebeb",
      "#f7f7f8"
    ],
    black: "#000000",
    white: "#ffffff",
    marketing: {
      orange: "#f38020",
      lightOrange: "#faae40",
      red: "#e04e64",
      lightRed: "#e27179",
      green: "#71c492",
      lightGreen: "#9fd3b5",
      blue: "#2da7cb",
      lightBlue: "#89c4e1",
      purple: "#7d4788",
      lightPurple: "#af7baf",
      navy: "#00517f",
      lightNavy: "#4f8cc8",
      gray: ["#404242", "#707070", "#aaaaaa", "#dddddd", "#f5f5f5"]
    },
    modes: {
      1: {
        text: '#1d1f20',
        background: '#ffffff',
        primary: '#2c7cb9',
      },
      2: {
        text: '#36393a',
        background: '#eaebeb',
        primary: '#9f5bb0',
      },
      3: {
        text: '#ffffff',
        background: '#1d1f20',
        primary: '#2c7cb9',
      },
      4: {
        text: '#ffffff',
        background: '#1d1f20',
        primary: '#9f5bb0',
      },
      5: {
        text: '#ffffff',
        background: '#9f5bb0',
        primary: '#1d1f20',
      },
      6: {
        text: '#ffffff',
        background: '#2b818e',
        primary: '#1d1f20',
      },
      7: {
        text: '#ffffff',
        background: '#2c7cb0',
        primary: '#1d1f20',
      },
      8: {
        text: '#ffffff',
        background: '#276d9b',
        primary: '#1d1f20',
      },
      9: {
        text: '#ffffff',
        background: '#1f567a',
        primary: '#1d1f20',
      },
      10: {
        text: '#ffffff',
        background: '#1f567a',
        primary: '#1d1f20',
      },
      11: {
        text: '#163d57',
        background: '#add2eb',
        primary: '#1d1f20',
      },
      12: {
        text: '#ffffff',
        background: '#163d57',
        primary: '#1d1f20',
      },
      13: {
        text: '#ffffff',
        background: '#6373b6',
        primary: '#1d1f20',
      },
      14: {
        text: '#e0e3f0',
        background: '#181e34',
        primary: '#1d1f20',
      },
      15: {
        background: '#c8cde5',
        text: '#181e34',
        primary: '#1d1f20',
      },
    }
  }
};

export default theme;
