import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
        50: "#F2F5F9",
        100: "#DAE3EE",
        200: "#BFCEDF",
        300: "#A5B9D1",
        400: "#8AA4C3",
        500: "#6F8FAE",
        600: "#596E8D",
        700: "#42516B",
        800: "#2B3549",
        900: "#141A26",
    },
    secondary: {
      50: "#FDFDFD",
      100: "#FAFAFA",
      200: "#F6F6F6",
      300: "#F1F1F1",
      400: "#ECECEC",
      500: "#E6E6E6",
      600: "#CFCFCF",
      700: "#A9A9A9",
      800: "#838383",
      900: "#5D5D5D",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Roboto, sans-serif",
  },
});

export default theme;
