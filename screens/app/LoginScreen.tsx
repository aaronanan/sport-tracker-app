import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={{ marginTop: 50 }}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={{ color: "white", fontWeight: "500" }}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Text style={{ marginTop: 6, fontSize: 13 }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#016afb",
    justifyContent: "flex-end",
  },
  main: {
    backgroundColor: "white",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  input: {
    backgroundColor: "#e8e8e8",
    width: 250,
    height: 40,
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  loginBtn: {
    backgroundColor: "#016afb",
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: 250,
    height: 40,
    marginTop: 10,
    alignItems: "center",
  },
});

export default LoginScreen;
