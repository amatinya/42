import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store.ts";
import { IWeatherInfo, IWeatherState } from "./types.ts";
import { searchCurrentWeather, searchWeatherForecast } from "./middlewares.ts";

const initialState: IWeatherState = {
    current: null,
    forecast: [],
};

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(searchCurrentWeather.fulfilled, (state, action) => {
            state.current = action.payload!;
        });

        builder.addCase(searchWeatherForecast.fulfilled, (state, action) => {
            const uniqueDays: Record<number, IWeatherInfo> = {};

            for (const forecast of Object.values(action.payload!)) {
                const d = new Date(forecast.dt_txt).getDay();

                if (!(d in uniqueDays)) {
                    uniqueDays[d] = forecast;
                }
            }

            state.forecast.push(...Object.values(uniqueDays).slice(0, 5)); // 5 days only as mentioned in the task
        });
    },
});

export const selectCurrentWeather = (state: RootState) => state.weather.current;
export const selectWeatherForecast = (state: RootState) => state.weather.forecast;

export default weatherSlice.reducer;
