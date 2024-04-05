import { Image, Text, TouchableOpacity, View } from "react-native";
import { Txt } from "../Txt/Txt";
import { s } from "./WeatherBasic.style";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

export const WeatherBasic = ({
  temperature,
  interpretation,
  city,
  dailyWeather,
}) => {
  const nav = useNavigation();
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_text}>Sunny</Txt>
      </View>
      <View style={s.temperature_box}>
        <TouchableOpacity
          onPress={() => nav.navigate("Forecasts", { city, ...dailyWeather })}
        >
          <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>
        <Image source={interpretation.image} style={s.image} />
      </View>
    </>
  );
};
