export interface WeatherData {
  temp: number;
  decription: string;
  name: string;
  iconUrl: string;
  main: object;
  weather: Array<object>;
}
