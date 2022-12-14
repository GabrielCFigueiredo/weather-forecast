import axios from "axios";
import { createContext, useState } from "react";

export const WeatherContext = createContext({});
const URL = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = "2a8b368814d45622fb7c885641b07514";

export const WeatherProvider = ({ children }) => {
  const [locality, setLocality] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [data, setData] = useState("");
  const [list, setList] = useState("");
  const [current, setCurrent] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [city, setCity] = useState("");

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  const searchData = () => {
    axios
      .get(`${URL}weather?q=${city}&appid=${API_KEY}`)
      .then(({ data }) => {
        setLocality(data);
        setLatitude(data.coord.lat);
        setLongitude(data.coord.lon);
        
      })
      .catch((error) => error.res);
  }
  

  return (
    <WeatherContext.Provider
      value={{
        locality,
        setLocality,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
        URL,
        API_KEY,
        data,
        setData,
        list,
        setList,
        current,
        setCurrent,
        currentImage,
        setCurrentImage,
        city,
        setCity,
        handleInput,
        searchData
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
