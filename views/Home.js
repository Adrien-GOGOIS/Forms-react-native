// Imports react native
import { ScrollView, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";

// Imports react
import { useState, useContext } from "react";

// React navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Context
import { LogContext } from "../App";
import { View } from "react-native-web";

// HOME
export default function Home({ navigation }) {
  // Use Context
  const logState = useContext(LogContext);

  // Function click déconnexion
  const handleSubmit = () => {
    logState.setLoggedIn(false);
    navigation.navigate("Login");
  };

  // RENDER
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>HOME</Text>
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(100, 150, 255, 0.9)",
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
