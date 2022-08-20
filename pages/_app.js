import { WeatherProvider } from "../Context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WeatherProvider>
        <Component {...pageProps} />
      </WeatherProvider>
    </>
  );
}

export default MyApp;
