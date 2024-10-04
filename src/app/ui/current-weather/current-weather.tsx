import { FC } from "react";
import { useSelector } from "react-redux";

import { selectCurrentWeather } from "@/redux/weather";

import s from "./current-weather.module.scss";

const CurrentWeather: FC = () => {
    const currentWeather = useSelector(selectCurrentWeather);

    if (currentWeather === null) {
        return null;
    }

    return (
        <div className={s.CurrentWeather}>
            <h1 className={s.name}>
                {currentWeather.name} ({currentWeather.sys.country})
            </h1>
            <p className={s.main}>{currentWeather.weather[0].main}</p>
            <p className={s.description}>{currentWeather.weather[0].description}</p>
        </div>
    );
};

export default CurrentWeather;
