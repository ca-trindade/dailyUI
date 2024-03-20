import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
  },
  container2: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    width: 250,
    height: 250,
  },
  text: {
    color: "#CBE4DE",
    fontSize: 27,
    margin: 10,
  },
  progressBar: {
    width: 250,
    height: 10,
    marginTop: 30,
    borderRadius: 6,
  },
  containerControllers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  playPause: {
    borderRadius: 100,
    backgroundColor: "#BED754",
    alignItems: "center",
    padding: 25,
    borderRadius: 100,
    margin: 20,
  },
  step: {
    borderRadius: 100,
    backgroundColor: "#BED754",
    alignItems: "center",
    paddingRight: 11,
    padding: 10,
    borderRadius: 100,
  },
});
