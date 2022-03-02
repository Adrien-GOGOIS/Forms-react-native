// imports react native
import { StyleSheet } from "react-native";

// imports react
import { createContext, useState } from "react";

// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Components
import Home from "./views/Home";
import Login from "./views/Login";

// context
export const LogContext = createContext();

// APP
export default function App() {
  // State
  const [isLoggedIn, setLoggedIn] = useState(false);
  const value = {
    isLoggedIn: isLoggedIn,
    setLoggedIn: setLoggedIn,
  };

  return (
    <LogContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </LogContext.Provider>
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
});
