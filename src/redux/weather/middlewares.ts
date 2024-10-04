import { createAsyncThunk } from "@reduxjs/toolkit";

import { WeatherApi } from "@/common/api";

export const searchCurrentWeather = createAsyncThunk(
    "weather/current",
    async ({ query }: Record<"query", string>, { rejectWithValue }) => {
        try {
            const { data } = await WeatherApi.fetchCurrentWeather({ query });

            switch (data.cod) {
                case 200:
                    return data;
                case 400: // rejectWithValue(...)
                default:
                    return data;
            }
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export const searchWeatherForecast = createAsyncThunk(
    "weather/forecast",
    async ({ query }: Record<"query", string>, { rejectWithValue }) => {
        try {
            const { data } = await WeatherApi.fetchWeatherForecast({ query });

            switch (data.cod) {
                case 200:
                    return data.list;
                case 400: // rejectWithValue(...)
                default:
                    return data.list;
            }
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
