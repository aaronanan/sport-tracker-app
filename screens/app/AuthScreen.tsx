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
        style={styles.signupBtn}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.signupBtnText}>Create a free account</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginTop: 15,
        }}
      >
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text
            style={{
              fontWeight: "600",
              textDecorationLine: "underline",
              color: "white",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#016afb",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "500",
    fontSize: 30,
    marginBottom: 10,
  },
  helperText: { color: "white", marginBottom: 15 },
  loginText: { color: "white" },
  signupBtn: {
    backgroundColor: "white",
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  signupBtnText: {
    color: "#016afb",
    fontWeight: "600",
  },
});

export default Login;
