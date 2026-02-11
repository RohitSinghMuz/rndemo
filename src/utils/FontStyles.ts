import { StyleSheet } from 'react-native';
import Fonts from './Fonts';
import Colors from './Colors';

type FontStyleParams = {
  font: string;
  size: number;
  color: string;
};

export const getFont = ({ font, size, color }: FontStyleParams) => ({
  fontFamily: font,
  fontSize: size,
  color: color,
});

const FontStyles = StyleSheet.create({
  montserratM14Black: getFont({font: Fonts.MONTSERRAT_M,size: 26,color: Colors.yellow}),

});

export default FontStyles;
