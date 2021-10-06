import { createTheme } from "@material-ui/core/styles";

/*
Theme color palette
dark blue: "#31525b"
dark orange: "#ffa101"
light blue: "#b3dee5"
light orange: "#fae6b1"
*/

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#31525b",
    },
    secondary: {
      main: "#b3dee5",
    },
    background: {
      default: "#b3dee5",
    },
  },
});

export default theme;