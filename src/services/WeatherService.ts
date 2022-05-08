import { Weather } from "../store/types/types";
import api from "../axios";
import { AxiosResponse } from "axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }
}
