import { ThemeProvider } from "@material-ui/core";
import { WeatherProvider } from "../Context";
import { GlobalStyles } from "../GlobalStyles/GlobalStyles";
import { theme } from "../theme/theme";



function MyApp({ Component, pageProps }) {
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
