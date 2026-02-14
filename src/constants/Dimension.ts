import { Dimensions, PixelRatio } from 'react-native';
import DeviceInfo from 'react-native-device-info';

/* Get screen size once */
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

/* Base sizes (design reference) */
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;
const TABLET_WIDTH = 768;

/* Scale factors */
const scale = SCREEN_WIDTH / BASE_WIDTH;
const tabletScale = SCREEN_WIDTH / TABLET_WIDTH;

/* ---------- Normal Scale (width based) ---------- */
export function normalize(size: number) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

/* ---------- Vertical Scale (height based) ---------- */
export function normalizeNew(size: number) {
  const newSize = (SCREEN_HEIGHT / BASE_HEIGHT) * size;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

/* ---------- Tablet Scale ---------- */
export function normalizeTablet(size: number) {
  const newSize = size * tabletScale * 2;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

/* ---------- iPad / large screen check ---------- */
export const isIpad = () => {
  return SCREEN_WIDTH > TABLET_WIDTH;
};

/* ---------- Device tablet detection ---------- */
export const isTablet = () => {
  return DeviceInfo.isTablet();
};

/* ---------- Moderate scale (smooth resizing) ---------- */
export function moderateScale(size: number, factor = 0.5) {
  const newSize = size + (normalize(size) - size) * factor;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

/* ---------- Exports ---------- */
export default {
  n:normalize,
  nn:normalizeNew,
  tab:normalizeTablet,
  M:moderateScale,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  tabT:isIpad,
  isTablet:isTablet,
};
