import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import "./InfoBox.css"
const Img = "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=397&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const COLD_URL = "https://images.unsplash.com/photo-1674407864752-210fdb257d37?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const RAIN_URL = "https://plus.unsplash.com/premium_photo-1671148804428-479b78611ebd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export default function InfoBox({ Info }) {


    return (
        <div className="Infobox">
            <h2 className='title'>{Info.city}</h2>
            <div className="card-container">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Info.Humidity > 80
                            ? RAIN_URL :
                            Info.Temp > 15
                                ? HOT_URL
                                : COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city}&nbsp;{Info.Humidity > 80
                                ? <ThunderstormIcon /> :
                                Info.Temp > 15
                                    ? <Brightness4Icon />
                                    : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temprature ={Info.Temp}</p>
                            <p>Humidity = {Info.Humidity}</p>
                            <p>Min_temp = {Info.TempMin}</p>
                            <p>Max_temp ={Info.TempMax}</p>
                            <p>The weather can be describe as <b style={{ color: 'black' }}>{Info.Weather}</b> feels like {Info.FeelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}








