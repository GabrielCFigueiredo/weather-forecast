import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../Context";
import moment from "moment";
import Image from "next/image";
import {
  CardDescription,
  CardNameCity,
  CardTempAndImage,
  CardTempMaxAndMin,
  Temp,
  Wrapper,
  WrapperCurrent,
} from "./predictiveSearch.styles";
import { mdiArrowDownThin } from "@mdi/js";
import { mdiArrowUpThin } from "@mdi/js";
import Icon from "@mdi/react";

export default function PredictiveSearch() {
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

  const myLoader = () => {
    return `http://openweathermap.org/img/wn/${image}@2x.png`;
  };

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
    <Wrapper>
      {currentCity &&
        currentCity.map((current) => {
          return (
            <WrapperCurrent key={current.id}>
              <span>{moment().format("LLL")}</span>
              <CardTempMaxAndMin>
                <span>Min {current.main.temp_min.toFixed()}ºC</span>
                <Icon path={mdiArrowDownThin} size={1} />
                <span>Máx {current.main.temp_max.toFixed()}ºC</span>
                <Icon path={mdiArrowUpThin} size={1} />
              </CardTempMaxAndMin>
              <CardTempAndImage>
                <Temp>{current.main.temp.toFixed()}ºC</Temp>
                <Image
                  loader={myLoader}
                  src={API}
                  alt="Previsão do Tempo"
                  width={100}
                  height={100}
                />
              </CardTempAndImage>
              <CardDescription>
                <span>{current.weather[0].description}</span>
              </CardDescription>
              <CardNameCity>
                <span>{current.name}</span>
              </CardNameCity>
            </WrapperCurrent>
          );
        })}
    </Wrapper>
  );
}
