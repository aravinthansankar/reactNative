import { StyleSheet } from "react-native";

const FeedScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
  },
  midContainer: {
    flex: 5,
  },
  inputLayout: {
    flex: 3,

    justifyContent: "center",
    margin: 5,
  },
  ListHolder:{
    flex: 1,
  },
  noData:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  }
});

export default FeedScreenStyle;
