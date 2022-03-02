import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity, Text } from "react-native";
import { NativeRouter, Routes, Route, useNavigate } from "react-router-native";

import Home from "./views/Home";
import Login from "./views/Login";

export default function App() {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigate("/login")}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />

      <NativeRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<App />} />
        </Routes>
      </NativeRouter>
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
    marginBottom: 5,
    padding: 10,
  },
});
