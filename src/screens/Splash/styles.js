import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 60,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "500",
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 14,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bigTitle: {
    fontSize: 50,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.white,
  },
  subTitle: {
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 64,
    marginTop: 20,
  },
});

export default styles;
