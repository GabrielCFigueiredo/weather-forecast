
import { red } from "@material-ui/core/colors";
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: orange[900]
        },
        background: {
            main: red[900]
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: 0,
                    padding: 0
                }
            }
        }
    },
    spacing: [0]
    


  });
