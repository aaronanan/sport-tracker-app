import { Text, TextInput, View, StyleSheet } from "react-native";

const Signup = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>What's your email?</Text>
        <TextInput style={styles.input} placeholder="Email" />
      </View>
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
  input: {
    backgroundColor: "white",
    width: 300,
    height: 30,
  },
});

export default Signup;
