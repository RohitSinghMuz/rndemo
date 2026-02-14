import { StyleSheet } from "react-native";
import Dimension from "../utils/Dimension";

const style = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Dimension.n(40),
      backgroundColor: "#fff",
    },
    title: {
      fontSize: Dimension.n(20),
      marginBottom: Dimension.n(20),
      textAlign: "center",
      fontWeight: "600",
    },
  });

  export default style