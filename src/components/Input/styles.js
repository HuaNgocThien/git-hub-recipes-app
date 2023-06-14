import colors from "../../constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.ligthGrey,
    padding: 16,
    marginVertical: 16,
  },
  input: {
    color: colors.black,
    fontSize: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
});

export default styles;
