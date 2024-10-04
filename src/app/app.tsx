import { FC } from "react";

import { Header, CurrentWeather, WeatherForecast } from "./ui";

import s from "./app.module.scss";

const App: FC = () => {
    return (
        <main className={s.App}>
            <Header />
            <div className={s.weathers}>
                <CurrentWeather />
                <WeatherForecast />
            </div>
        </main>
    );
};

export default App;
