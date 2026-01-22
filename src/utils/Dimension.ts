import { Dimensions, PixelRatio } from "react-native";

const { width } = Dimensions.get("window");

/**
 * Base design width (Figma / XD)
 * Change once → whole app scales
 */
const BASE_WIDTH = 375;

class Dimension {
  static n(value: number): number {
    return PixelRatio.roundToNearestPixel(
      (width / BASE_WIDTH) * value
    );
  }
}

export default Dimension;
