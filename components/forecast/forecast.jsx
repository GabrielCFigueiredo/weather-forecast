import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { WeatherContext } from "../../Context";
import {
  CardCurrent,
  CardDescription,
  CardForecastNextHours,
  CardTempAndImage,
  CardTempMaxAndMin,
  Temperature,
  Wrapper,
  WrapperForecast,
  WrapperForecastNextHours,
} from "./forecast.styles";

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
      <Wrapper>
        {current &&
          current.map((current) => {
            return (
              <CardCurrent key={current.id}>
                <span>{moment().format("LLL")}</span>
                <CardTempMaxAndMin>
                  <span>Min {current.main.temp_min.toFixed()}ºC</span>
                  <span>Máx {current.main.temp_max.toFixed()}ºC</span>
                </CardTempMaxAndMin>
                <CardTempAndImage>
                  <Temperature>{current.main.temp.toFixed()}ºC</Temperature>
                  <img src={API} alt="Previsão do Tempo" />
                </CardTempAndImage>
                <CardDescription>
                <span>{current.weather[0].description}</span>
                </CardDescription>
                <span>{current.name}</span>
              </CardCurrent>
            );
          })}
        <WrapperForecast>
          <WrapperForecastNextHours>
            {list &&
              list.map((list) => {
                return (
                  <CardForecastNextHours key={list.id}>
                    <span>
                      {list.main.temp.toFixed()}ºC
                    </span>
                    <div>
                    <img src={API} alt="Previsão do Tempo" />
                    </div>
                    <span>{list.dt_txt}</span>
                  </CardForecastNextHours>
                );
              })}
          </WrapperForecastNextHours>
        </WrapperForecast>
      </Wrapper>
    </>
  );
}
