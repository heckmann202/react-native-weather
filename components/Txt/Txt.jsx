import { Text, useWindowDimensions } from "react-native";
import { s } from "./Txt.style";

export const Txt = ({ children, style, ...restProps }) => {
  const fontSize = style?.fontSize || s.txt.fontSize;
  const { height } = useWindowDimensions();
  return (
    <Text style={[s.txt, style, { fontSize: fontSize }]} {...restProps}>
      {children}
    </Text>
  );
};
