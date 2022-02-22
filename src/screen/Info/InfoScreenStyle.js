import { StyleSheet } from "react-native";

const InfoScreenStyle = StyleSheet.create({
  mainHolder: {
    flex: 1,
  },
  videoHolder: {
    flex: 1,
    margin: 15,
  },
  loddingHolder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loddingText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  noOutput: {
    flex: 1,
    backgroundColor: "white",
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  noOutputText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
  },
  Card: {
    margin: 15,
  },
});

export default InfoScreenStyle;
