import { s } from "./Header.style";
import { Txt } from "../../components/Txt/Txt";
import { useRoute, useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";

export const Header = ({ city }) => {
  const nav = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.back_btn} onPress={nav.goBack}>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View style={s.header_txts}>
        <Txt>{city}</Txt>
        <Txt style={s.subtitle}>7 Day Forecast</Txt>
      </View>
    </View>
  );
};
