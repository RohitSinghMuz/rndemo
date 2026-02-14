import { Platform, StyleSheet } from 'react-native';
import FontStyles from './FontStyles';
import Dimension from 'src/constants/Dimension';
import Colors from 'src/constants/Colors';
import { PLATFORM_OS_TYPE } from 'src/constants/AppConstant';


const Theme = StyleSheet.create({
  keyboardAvoidingView: { flex: 1 },

  container: {
    padding: Dimension.n(0),
    flex: 1,
    backgroundColor: "Colors.whiteGradient3",
  },

  bgImageContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  bgPlaceHolderImage: {
    width: '100%',
  },

  cardPadding24: {
    padding: Dimension.n(24),
  },

  cardContainer: {
    margin: Dimension.n(20),
    padding: Dimension.n(20),
    bottom: Dimension.n(0),
    backgroundColor:" Colors.white",
    shadowOffset: { width: Dimension.n(0), height: Dimension.n(2) },
    shadowColor:
      Platform.OS === PLATFORM_OS_TYPE.ANDROID.toLowerCase()
        ? Colors.black
        :" Colors.lightGray",
    shadowOpacity: Dimension.n(0.5),
    shadowRadius: Dimension.n(3),
    elevation: Dimension.n(4),
    borderRadius: Dimension.n(16),
  },

  cardContainerBgBlue: {
    margin: Dimension.n(20),
    padding: Dimension.n(20),
    bottom: Dimension.n(0),
    backgroundColor: "Colors.white",
    shadowOffset: { width: Dimension.n(0), height: Dimension.n(2) },
    shadowColor:
      Platform.OS === PLATFORM_OS_TYPE.ANDROID.toLowerCase()
        ? Colors.black
        :" Colors.lightGray",
    shadowOpacity: Dimension.n(0.5),
    shadowRadius: Dimension.n(3),
    elevation: Dimension.n(4),
    borderRadius: Dimension.n(16),
  },

  border: {
    height: Dimension.n(1),
    backgroundColor: "Colors.greyBorder",
    marginTop: Dimension.n(20),
    marginHorizontal: Dimension.n(20),
  },

  elevationWithShadow: {
    shadowOffset: { width: Dimension.n(0), height: Dimension.n(4) },
    shadowColor:
      Platform.OS === PLATFORM_OS_TYPE.ANDROID.toLowerCase()
        ? Colors.black
        : "Colors.lightGray",
    shadowOpacity: Dimension.n(0.5),
    shadowRadius: Dimension.n(3),
    elevation: Dimension.n(6),
  },
});

export default Theme;
