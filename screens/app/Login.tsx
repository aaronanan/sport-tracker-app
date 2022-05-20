import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  navigation: any;
};

const Login = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sport Tracker</Text>
      <Text style={styles.helperText}>
        Create and manage your team in seconds
      </Text>
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.startBtnText}>Create a free account</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account?{" "}
        <Text style={{ fontWeight: "600", textDecorationLine: "underline" }}>
          Login
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0099ff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 5,
  },
  helperText: { color: "white", marginBottom: 10 },
  loginText: { color: "white", marginTop: 10 },
  startBtn: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
  },
  startBtnText: {
    color: "#0099ff",
    fontWeight: "300",
  },
});

export default Login;
