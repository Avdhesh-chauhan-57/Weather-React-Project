import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./searchBox.css"
export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "a4dce80121c48cc42c67d59d416ba9fc";

    let getWeaterInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();
            console.log(jsonresponse);
            let result = {
                city: jsonresponse.name,
                Temp: jsonresponse.main.temp,
                TempMax: jsonresponse.main.temp_max,
                TempMin: jsonresponse.main.temp_min,
                Humidity: jsonresponse.main.humidity,
                FeelsLike: jsonresponse.main.feels_like,
                Weather: jsonresponse.weather[0].description
            }
            console.log(result);
            return result;

        } catch (err) {
            throw err;
        }
    }



    let handledata = (e) => {
        setCity(e.target.value)
    }
    let handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log(city);
            let info = await getWeaterInfo();
            updateInfo(info);
            setCity("")
        } catch (err) {
            setError(true);
            setCity("")
        }
    }

    return (
        <div className='main'>
            <div className='form'>
                <form action="" onSubmit={handleSubmit}>
                    <TextField id="city"
                        label="City Name"
                        variant="outlined"
                        required
                        value={city}
                        onChange={handledata}
                    />
                    <br />
                    <Button variant="outlined" type='submit' >Search</Button>
                    {error && <p style={{ color: "red" }}>No, Such place exits</p>}

                </form>
            </div>

        </div>
    )
}