// import { yellow } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

// const theme = ThemeProvider({
//   palette: {
//     primary: {
//       light: "#757ce8",
//       main: "#3f50b5",
//       dark: "#002884",
//       contrastText: "#fff",
//     },
//     secondary: {
//       light: "#ff7961",
//       main: "#f44336",
//       dark: "#ba000d",
//       contrastText: "#000",
//     },
//   },
// });

// const primaryColor = theme.palette.background.primary;
// const secondaryColor = theme.palette.background.secondary;

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: "20px",
  },
  card: {
    height: "100%",
    display: "flezx",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
}));

export default useStyles;
