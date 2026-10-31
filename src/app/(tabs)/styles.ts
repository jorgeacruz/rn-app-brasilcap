import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  blogContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: colors.blue[300],
    width: "100%",
    height: 120,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
});
