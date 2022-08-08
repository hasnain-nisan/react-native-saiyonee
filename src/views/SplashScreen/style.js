import { StyleSheet } from "react-native";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";


const styles = StyleSheet.create({
  divCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mainDiv: {
    height: responsiveScreenHeight(100),
  },
  bannerDiv: {
    width: "100%",
    height: responsiveScreenHeight(46),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerText: {
    position: "absolute",
    width: 213,
    height: 76,
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 31,
    lineHeight: 38,
    textAlign: "center",
    color: "#1F2937",
  },
  logo: {
    marginTop: responsiveScreenHeight(5),
    width: responsiveScreenWidth(50),
    height: responsiveScreenHeight(25),
  },
  loadingSpinner: {
    marginTop: responsiveScreenHeight(5),
    width: 50,
    height: 50,
    borderColor: "#1F2937",
    borderWidth: 4,
    borderStyle: "dashed",
    borderRadius: 50,
  },
});

export default styles