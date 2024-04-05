import { s } from "./Forecasts.style";
import { Txt } from "../../components/Txt/Txt";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header";
import { ForecastListItem } from "../../components/ForecastListItem/ForecastListItem";
import { View } from "react-native";
import { DAYS, getWeatherInterpretation } from "../../utils/mateo_utils";

export const Forecasts = () => {
  const { params } = useRoute();

  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {params.time.map((time, index) => {
        const weatherCode = params.weathercode[index];
        const image = getWeatherInterpretation(weatherCode).image;
        const temperature = params.temperature_2m_max[index].toFixed(0);
        const date = new Date(time);
        const dayOfWeek = DAYS[date.getDay()];
        const formattedDate = date.toLocaleDateString("default", {
          day: "numeric",
          month: "numeric",
        });
        return (
          <ForecastListItem
            key={time}
            image={image}
            day={dayOfWeek}
            date={formattedDate}
            temperature={temperature}
          />
        );
      })}
    </View>
  );
  return (
    <>
      <Header city={params.city} />
      {forecastList}
    </>
  );
};
