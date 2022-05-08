import React, { useEffect } from "react";
import s from "./Home.module.scss";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import { Days } from "./components/Days/Days";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { selectCurrentWeatherData } from "../../store/selectors";

interface Props {}

export const Home = () => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather("Lviv"));
  }, []);

  return (
    <div>
      <div className={s.wrapper}>
        {!!weather[0] && <ThisDay weather={weather[0]} />}
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
