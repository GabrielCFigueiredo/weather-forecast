import { useState } from "react"

export default function PredictiveSearch() {
    const [locality, setLocality] = useState("")

    const handleInput = (e) => {
        setLocality(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={handleInput} value={locality} />
        </div>
    )
}