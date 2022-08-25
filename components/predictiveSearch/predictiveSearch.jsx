import { makeStyles } from "@material-ui/styles";
import {
  CardMedia,
  Container,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../Context";
import SearchIcon from "@mui/icons-material/Search";

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
    setCity
  } = useContext(WeatherContext);

  const API = `http://openweathermap.org/img/wn/${image}@2x.png`;

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  function searchData() {
    axios
      .get(`${URL}weather?q=${city}&appid=${API_KEY}`)
      .then(({ data }) => {
        setLocality(data);
        setLatitude(data.coord.lat);
        setLongitude(data.coord.lon);
        
      })
      .catch((error) => error.res);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLa(position.coords.latitude);
      setLon(position.coords.longitude);
    });
    axios
      .get(`${URL}weather?lat=${la}&lon=${lon}&lang=pt&units=metric&appid=${API_KEY}`)
      .then(({ data }) => {
        console.log("data", data);
        setCurrentCity([data]);
        setImage(data.weather[0].icon)
        
      })
      .catch((error) => error.res);
  }, [API_KEY, URL, la, lon]);
  return (
    <Container maxWidth="sm">
      <Container maxWidth="sm">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Digute sua localização"
            inputProps={{ "aria-label": "search google maps" }}
            width={"50%"}
            onChange={handleInput}
            value={city}
          />
          <Link href="" passHref>
            <IconButton type="button" onClick={searchData}>
              <SearchIcon />
            </IconButton>
          </Link>
        </Paper>
      </Container>
      <Container maxWidth="sm">
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentCity &&
            currentCity.map((current) => {
              return (
                <Box key={current.id}>
                  <h1>{current.main.temp}ºC</h1>
                  <CardMedia component="img" height={200} width={200} image={API} />
                  <p>Minima {current.main.temp_min}ºC</p>
                  <p>Máxima {current.main.temp_max}ºC</p>
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
