import { Image, TextInput, View } from "react-native";
import { Txt } from "../Txt/Txt";
import { s } from "./SearchBar.style";

export const SearchBar = ({ onSubmit }) => {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      style={s.search}
      placeholder="Type a city... ex: Dallas"
    />
  );
};
