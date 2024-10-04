import { FC } from "react";
import { useSelector } from "react-redux";
import { selectWeatherForecast } from "@/redux/weather";

import s from "./weather-forecast.module.scss";

const WeatherForecast: FC = () => {
    const weatherForecast = useSelector(selectWeatherForecast);

    console.log(weatherForecast);

    if (weatherForecast.length === 0) {
        return null;
    }

    return (
        <div className={s.WeatherForecast}>
            {weatherForecast.map((wf) => (
                <div className={s.day}>
                    <h3 className={s.name}>{new Date(wf.dt_txt).toLocaleString("en", { weekday: "short" })}</h3> -
                    <p className={s.weather}>{wf.weather[0].main}</p>
                </div>
            ))}
        </div>
    );
};

export default WeatherForecast;
