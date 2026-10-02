import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./App.css"

export default function weatherInfo() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "London",
        FeelsLike: 12.77,
        Humidity: 92,
        Temp: 13.01,
        TempMax: 13.01,
        TempMin: 13.01,
        Weather: "clear sky"
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <div className="weather">
            <h1 style={{ textAlign: "center " }}>WeatherNow  &#9729;</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox Info={weatherInfo} />
        </div>
    )
}