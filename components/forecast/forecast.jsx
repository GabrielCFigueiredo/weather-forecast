import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import moment from "moment";
import { useContext, useEffect } from "react";
import { WeatherContext } from "../../Context";

export default function Forecast() {
  const {
    longitude,
    latitude,
    URL,
    API_KEY,
    setData,
    data,
    list,
    setList,
    current,
    setCurrent,
    currentImage,
    setCurrentImage,
  } = useContext(WeatherContext);

  const API = `http://openweathermap.org/img/wn/${currentImage}@2x.png`;

  useEffect(() => {
    axios
      .get(
        `${URL}weather?lat=${latitude}&lon=${longitude}&lang=pt&units=metric&appid=${API_KEY}`
      )
      .then(({ data }) => {
        setCurrentImage(data.weather[0].icon);
        setCurrent([data]);
        console.log("weather", data);
      })
      .catch((error) => error.res);
  }, [API_KEY, URL, latitude, longitude, setCurrent, setCurrentImage]);

  useEffect(() => {
    axios
      .get(
        `${URL}forecast?lat=${latitude}&lon=${longitude}&cnt=15&units=metric&appid=${API_KEY}`
      )
      .then(({ data }) => {
        setData(data.city.name);
        setList(data.list);
        console.log(data.list);
      })
      .catch((error) => error.res);
  }, [API_KEY, URL, latitude, longitude, setData, setList]);
  return (
    <>
      <Box
        sx={{
          width: "99vw",
          height: "80vh",
        }}
      >
        <Box>
          <Box
            sx={{
              height: "60vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {current &&
              current.map((current) => {
                return (
                  <Box
                    key={current.id}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"16px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography variant="body2">
                      {moment().format("LLL")}
                    </Typography>
                    <Box display={"flex"} gap={"16px"}>
                      <Typography variant="body2">
                        Min {current.main.temp_min.toFixed()}ºC
                      </Typography>
                      <Typography variant="body2">
                        Máx {current.main.temp_max.toFixed()}ºC
                      </Typography>
                    </Box>
                    <Typography variant="h1" color={"white"}>
                      {current.main.temp.toFixed()}ºC
                    </Typography>
                    <CardMedia
                      component="img"
                      height={200}
                      width={200}
                      image={API}
                    />
                    <Typography variant="subtitle1">
                      {current.weather[0].description}
                    </Typography>
                    <Typography variant="h6">{current.name}</Typography>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box
          sx={{
            overflow: "scroll",
            backgroundColor: "black",
            opacity: "0.6",
            height: "170px",
            color: "white",
            marginTop: "150px",
          }}
        >
          <Box
            sx={{
              height: "5vh",

              padding: "10px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "32px",
            }}
          >
            {list &&
              list.map((list) => {
                return (
                  <Box
                    key={list.id}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      minWidth: "200px",
                      height: "140px",
                      border: "1px solid white",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography variant="subtitle1">
                      {list.main.temp.toFixed()}ºC
                    </Typography>
                    <Box
                      sx={{
                        height: "70px",
                        width: "70px",
                      }}
                    >
                      <CardMedia
                        sx={{
                          height: "70px",
                          width: "70px",
                          background: "white",
                          borderRadius: "10px",
                        }}
                        component="img"
                        image={API}
                      />
                    </Box>
                    <Typography paddingLeft={"5px"} variant="subtitle2">
                      {list.dt_txt}
                    </Typography>
                  </Box>
                );
              })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
