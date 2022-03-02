import { ScrollView, Text } from "react-native";
import { TouchableOpacity } from "react-native";

import { useState, useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LogContext } from "../App";

export default function Home({ navigation }) {
  const logState = useContext(LogContext);

  const handleSubmit = () => {
    logState.setLoggedIn(false);
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <Text>HOME</Text>
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
