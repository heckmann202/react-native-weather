import { Image, View } from "react-native";
import {
  s,
  StyledContainer,
  StyledLabel,
  StyledValue,
} from "./WeatherAdvanced.style";

export const WeatherAdvanced = ({ sunrise, sunset, windspeed }) => {
  return (
    <>
      <View style={s.container}>
        <StyledContainer>
          <StyledValue>{sunrise}</StyledValue>
          <StyledLabel>Sunrise</StyledLabel>
        </StyledContainer>
        <StyledContainer>
          <StyledValue>{sunset}</StyledValue>
          <StyledLabel>Sunset</StyledLabel>
        </StyledContainer>
        <StyledContainer>
          <StyledValue>{windspeed} mp/h</StyledValue>
          <StyledLabel>Wind Speed</StyledLabel>
        </StyledContainer>
      </View>
    </>
  );
};
