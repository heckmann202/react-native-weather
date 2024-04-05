import { Text, View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { WeatherBasic } from "../../components/WeatherBasic/WeatherBasic";
import { s } from "./Home.style";
import { getWeatherInterpretation } from "../../utils/mateo_utils";
import { WeatherAdvanced } from "../../components/WeatherAdvanced/WeatherAdvanced";
import { SearchBar } from "../../components/SearchBar/SearchBar";

export const Home = ({ weather, city, onSubmitSearch }) => {
  console.log(city);
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(
    currentWeather.weathercode
  );

  return (
    <>
      <View style={s.weather_basic}>
        <WeatherBasic
          temperature={Math.round(currentWeather.temperature)}
          interpretation={currentInterpretation}
          city={city}
          dailyWeather={weather.daily}
        />
      </View>
      <View style={s.searchbar_container}>
        <SearchBar onSubmit={onSubmitSearch} />
      </View>
      <View style={s.weather_advanced}>
        <WeatherAdvanced
          sunrise={weather.daily.sunrise[0].split("T")[1]}
          sunset={weather.daily.sunset[0].split("T")[1]}
          windspeed={currentWeather.windspeed}
        />
      </View>
    </>
  );
};
