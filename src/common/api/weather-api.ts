import { axiosClient } from "@/config";
import { IWeatherInfo } from "@/redux/weather";

export class WeatherApi {
    static fetchCurrentWeather({ query }: Record<"query", string>) {
        return axiosClient.get<IWeatherInfo>("/data/2.5/weather", {
            params: { q: query, appid: import.meta.env.VITE_OPENWEATHERMAP_API_KEY },
        });
    }

    static fetchWeatherForecast({ query }: Record<"query", string>) {
        return axiosClient.get<{ cod: number; list: IWeatherInfo[] }>("/data/2.5/forecast", {
            params: { q: query, appid: import.meta.env.VITE_OPENWEATHERMAP_API_KEY },
        });
    }
}
