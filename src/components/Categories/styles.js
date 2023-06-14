import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: colors.green,
    padding: 8,
    fontWeight: "bold",
  },
  selectedItem: {
    color: colors.white,
  },
  itemContainer: {
    marginBottom: 14,
    marginRight: 17,
  },
  selectedItemContainer: {
    backgroundColor: colors.green,
    borderRadius: 10,
  },
});

export default styles;
