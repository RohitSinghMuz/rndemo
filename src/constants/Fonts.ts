import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;
const nBaselineHeight = 812;

export function normalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export function normalizeNew(size: number) {
  const verticalScale = (SCREEN_HEIGHT / nBaselineHeight) * size;
  return Math.round(PixelRatio.roundToNearestPixel(verticalScale));
}

export default {
  Inter: 'Inter_M',
  fontSize: normalize,
  n: normalize,
  nn: normalizeNew,
};
