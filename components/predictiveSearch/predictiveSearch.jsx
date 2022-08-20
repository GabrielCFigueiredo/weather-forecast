import { OutlinedInput } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../Context";

const URL = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = "2a8b368814d45622fb7c885641b07514";



export default function PredictiveSearch() {
  const [city, setCity] = useState("");
const { setLocality, locality} = useContext(WeatherContext)
 

  const handleInput = (e) => {
    setCity(e.target.value);
  };

  function searchData() {
    axios
      .get(`${URL}weather?q=${city}&appid=${API_KEY}`)
      .then(({ data }) => {
        setLocality(data)
      })
      .catch((error) => error.res);
  }
  useEffect(() => {
    searchData()
  })
  
  console.log("citydata",locality);
  
  
  return (
    <Box >
      
        <OutlinedInput placeholder="Please enter text" onChange={handleInput} value={city} />
        <Link href="/showWeatherForecast" passHref>
        <button onClick={searchData}>ir para previsão</button>
      </Link>
    </Box>
    
  );
}
