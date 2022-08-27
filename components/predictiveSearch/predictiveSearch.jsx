import { makeStyles } from "@material-ui/styles";
import { CardMedia, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../Context";
import "@fontsource/roboto/700.css";
import moment from "moment";

const useStyle = makeStyles((theme) => ({
  app: {
    margin: 0,
    padding: 0,
    height: "100vh",
    width: "100%",
  },
}));

export default function PredictiveSearch() {
  const classes = useStyle();

  const [la, setLa] = useState("");
  const [lon, setLon] = useState("");
  const [currentCity, setCurrentCity] = useState("");
  const [image, setImage] = useState("");
  const {
    setLocality,
    setLatitude,
    setLongitude,
    URL,
    API_KEY,
    city,
    setCity,
  } = useContext(WeatherContext);

  const API = `http://openweathermap.org/img/wn/${image}@2x.png`;

  const date = new Date().toLocaleString();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLa(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    axios
      .get(
        `${URL}weather?lat=${la}&lon=${lon}&lang=pt&units=metric&appid=${API_KEY}`
      )
      .then(({ data }) => {
        setCurrentCity([data]);
        setImage(data.weather[0].icon);
      })
      .catch((error) => error.res);
  }, [API_KEY, URL, la, lon]);
  return (
    <Container maxWidth="sm">
      <Container maxWidth="sm">
        <Box
          sx={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentCity &&
            currentCity.map((current) => {
              return (
                <Box key={current.id}>
                  <span>{moment().format("LLL")}</span>
                  <Typography variant="h1">
                    {current.main.temp.toFixed()}ºC
                  </Typography>
                  <Box sx={{
            
            display: "flex",
            gap: "16px;"
          }}>
                    <p>Min {current.main.temp_min.toFixed()}ºC</p>
                    <p>Máx {current.main.temp_max.toFixed()}ºC</p>
                  </Box>
                  <CardMedia
                    component="img"
                    height={200}
                    width={200}
                    image={API}
                  />
                  <span>{current.weather[0].description}</span>
                  <h5>{current.name}</h5>
                </Box>
              );
            })}
        </Box>
      </Container>
    </Container>
  );
}
