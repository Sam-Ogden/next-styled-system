import { CSSObject } from "styled-components";
import colors from "./Colors";
import shadows from "./Shadows";

export type Theme = {
  fontSizes: number[] & {
    body?: number;
    h1?: number;
    h2?: number;
    h3?: number;
    h4?: number;
    h5?: number;
    h6?: number;
  };
  borderWidth: { [x in "default" | "0" | "2" | "4" | "8"]: string };
  zIndex: {
    auto: "auto";
    "0": number;
    "10": number;
    "20": number;
    "30": number;
    "40": number;
    "50": number;
  };
  space: number[];
  radii: number[];
  focusRing: CSSObject;
  colors: typeof colors;
  shadows: typeof shadows;
};

const theme: Theme = {
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 96, 128],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  radii: [0, 1, 2, 4, 6, 8],
  focusRing: {
    outline: `2px dotted ${colors.primary.default}`,
  },
  borderWidth: {
    default: "1px",
    "0": "0",
    "2": "2px",
    "4": "4px",
    "8": "8px",
  },
  zIndex: {
    auto: "auto",
    "0": 0,
    "10": 10,
    "20": 20,
    "30": 30,
    "40": 40,
    "50": 50,
  },
  shadows,
  colors,
};

theme.fontSizes.body = theme.fontSizes[3];
theme.fontSizes.h1 = theme.fontSizes[7];
theme.fontSizes.h2 = theme.fontSizes[6];
theme.fontSizes.h3 = theme.fontSizes[5];
theme.fontSizes.h4 = theme.fontSizes[4];
theme.fontSizes.h5 = theme.fontSizes[4];
theme.fontSizes.h6 = theme.fontSizes[4];

export default theme;
