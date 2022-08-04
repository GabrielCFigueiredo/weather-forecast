import Link from "next/link"
import { useState } from "react"

const URL = "api.openweathermap.org/data/2.5/forecast?"

export default function PredictiveSearch() {
    const [locality, setLocality] = useState("")

    const handleInput = (e) => {
        setLocality(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleInput} value={locality} />
            <Link href="/showWeatherForecast">
            <button>ir para previsão</button>
            </Link>
        </div>
    )
}