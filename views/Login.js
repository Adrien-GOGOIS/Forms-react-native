// Imports React native
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";

// Import react
import { useState, useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Context
import { LogContext } from "../App";
import reactDom from "react-dom";

// Render Login.js
export default function Login({ navigation }) {
  // State Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State du context
  const logState = useContext(LogContext);

  // Fonction click login
  const handleSubmit = () => {
    if (email.length > 5 && password.length > 5) {
      //   setValidation(true);
      logState.setLoggedIn(true);
      navigation.navigate("Home");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text>Submit</Text>
      </TouchableOpacity>
      {logState.isLoggedIn ? (
        <View>
          <Text style={styles.valid}>Formulaire soumis</Text>
        </View>
      ) : (
        <View>
          <Text style={styles.invalid}>
            Entrez un mail et un mot de passe valides
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

// STYLES
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
    marginBottom: 5,
    padding: 10,
  },

  button: {
    backgroundColor: "rgba(100, 150, 255, 0.9)",
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },

  valid: {
    color: "green",
  },

  invalid: {
    color: "red",
  },
});
