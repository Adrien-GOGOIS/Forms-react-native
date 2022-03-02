import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const handleClick = () => {
    console.log("SUBMITTED")
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Enter your name' onValueChange={}  />
      <TextInput placeholder='Enter your password' onValueChange={} secureTextEntry />
      <TouchableOpacity onPress={handleClick}><Text>Submit</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
