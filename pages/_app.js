import { ThemeProvider } from "@material-ui/core";
import moment from "moment";
import "moment/locale/pt-br";
import { useEffect } from "react";
import { WeatherProvider } from "../Context";
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";
import { theme } from "../theme/theme";



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    moment.locale("pt-br");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <WeatherProvider>
        <Component {...pageProps} />
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default MyApp;
