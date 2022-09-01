
import { useContext } from "react";
import Forecast from "../components/forecast/forecast";
import PredictiveSearch from "../components/predictiveSearch/predictiveSearch";
import { WeatherContext } from "../Context";
import Layout from "../components/layout/layout"
import StyledInput from "../components/Input/Input";

export default function Home() {
  const { locality} =
    useContext(WeatherContext);
  return (
    <Layout>
    <StyledInput />
    <div>{locality ? <Forecast /> : <PredictiveSearch />}</div>
  </Layout>
  );
}
