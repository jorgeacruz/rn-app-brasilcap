import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
  },
  bkg: {
    width: "100%",
    opacity: 0.4,
  },
  innerView: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 135,
    height: 35,
    position: "absolute",
    top: 100,
  },
  viewForm: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  inputText: {
    margin: 6,
    width: "70%",
    padding: 8,
    borderRadius: 3,
    borderColor: colors.white[100],
    borderWidth: 1,
    textAlign: "center",
    color: "#fff",
  },
  btnLogin: {
    margin: 6,
    backgroundColor: colors.yellow[100],
    width: "70%",
    padding: 12,
    borderRadius: 3,
    alignItems: "center",
  },
  textBtn: {
    color: colors.blue[200],
    fontWeight: 600,
    fontSize: 16,
  },
  title: {
    marginVertical: 20,
    color: colors.white[100],
    fontSize: 18,
    fontWeight: "bold",
  },
});
