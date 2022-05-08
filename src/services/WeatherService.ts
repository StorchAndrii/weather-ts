import { Weather } from "../store/types/types";
import api from "../axios";
import { AxiosResponse } from "axios";

export class WeatherService {
  static getCurrentWeather(
    city: string
  ): Promise<AxiosResponse<{ list: Weather[] }>> {
    return api.get<{ list: Weather[] }>(`forecast?q=${city}`);
  }
}
