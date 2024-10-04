import { ChangeEventHandler, FC, useState } from "react";
import { Search } from "lucide-react";

import { Input, Button } from "@/common/ui";
import { useAppDispatch } from "@/common/hooks";
import { searchCurrentWeather, searchWeatherForecast } from "@/redux/weather";

import s from "./header.module.scss";

const Header: FC = () => {
    const dispatch = useAppDispatch();
    const [searchQuery, setSearchQuery] = useState("");

    const onSearchInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchQuery(e.target.value);
    };

    const onWeatherSearch = () => {
        dispatch(searchCurrentWeather({ query: searchQuery }));
        dispatch(searchWeatherForecast({ query: searchQuery }));
        setSearchQuery("");
    };

    return (
        <header className={s.Header}>
            <Input type={"text"} placeholder={"E.g. Yerevan"} value={searchQuery} onChange={onSearchInputChange} />
            <Button rightIcon={Search} onClick={onWeatherSearch}>
                Search
            </Button>
        </header>
    );
};

export default Header;
