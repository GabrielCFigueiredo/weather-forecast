import Link from "next/link";

export default function ShowWeatherForecast() {
  return (
    <div>
      show weather forecast
      <Link href="/">
        <button>pagina inicial</button>
      </Link>
    </div>
  );
}
