import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import axios from "axios";
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
            `${URL}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          )
          .then(({ data }) => {
            setCurrentImage(data.weather[0].icon);
            setCurrent(data.name);
            console.log("weather",data);
          })
          .catch((error) => error.res);
      }, [API_KEY, URL, latitude, longitude, setCurrent, setCurrentImage]);
    
      useEffect(() => {
        axios
          .get(
            `${URL}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
          )
          .then(({ data }) => {
            setData(data.city.name);
            setList(data.list);
            console.log(data);
          })
          .catch((error) => error.res);
      }, [API_KEY, URL, latitude, longitude, setData, setList]);
      return (
        <>
        <Box 
          sx={{
            height: "100vh",
            width: "100vw",
          }}
        >
          <Box sx={{
            display: "flex",
            border: "1px solid red",
            justifyContent: "center", 
            alignItems: "center",
            height: "50%"
          }}>
            <Box width={300} border={"1px solid blue"}>
            <CardMedia component="img" height={200} width={200} image={API} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {current}
              </Typography>
              <Typography variant="body2" color="text.secondary"></Typography>
            </CardContent>
            </Box>
          </Box>
          <h1>{data}</h1>
          {list &&
            list.map((list) => {
              return (
                <div key={list.id}>
                  <p>{list.main.temp}</p>
                </div>
              );
            })}
          <Link href="/">
            <button>pagina inicial</button>
          </Link>
        </Box>
        </>
      );
}