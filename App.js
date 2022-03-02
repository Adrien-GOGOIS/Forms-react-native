// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { TouchableOpacity, TextInput } from "react-native";

export default function App() {
  const handleSubmit = () => {
    console.log("SUBMITTED");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Enter your name" />
      <TextInput placeholder="Enter your password" secureTextEntry />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
  },
});
