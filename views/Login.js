import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { useState } from "react";
// import { useNavigate } from "react-router-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(false);

  //   const navigate = useNavigate();

  const handleSubmit = () => {
    if (email.length > 5 && password.length > 5) {
      setValidation(true);
      navigation.navigate("Home");
    }
  };
  return (
    <SafeAreaView>
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
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
      {validation ? (
        <View>
          <Text>Formulaire soumis</Text>
        </View>
      ) : (
        <View>
          <Text>Entrez un mail et un mot de passe valides</Text>
        </View>
      )}
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
