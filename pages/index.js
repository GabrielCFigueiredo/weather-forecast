import { useContext } from "react";
import Forecast from "../components/forecast/forecast";
import PredictiveSearch from "../components/predictiveSearch/predictiveSearch";
import { WeatherContext } from "../Context";


export default function Home() {
  const {locality} = useContext(WeatherContext)
  return (
    <div>          
      {
        locality ?  <Forecast /> : <PredictiveSearch />
      }
    
    </div>
  )
}
