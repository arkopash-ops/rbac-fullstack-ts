import { createTheme } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#1e88e5" },
        background: {
            default: "#121212",
            paper: "#1e1e1e"
        }
    },
});

export default darkTheme;