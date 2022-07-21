import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, TouchableOpacity ,View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')}  resizeMode="cover" style={styles.background} >
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ScreenB')}>
                <Text style={styles.text}>Press Me!!!!!!🥳</Text>
                <StatusBar style="auto" />
            </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  background: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },button: {
    padding: 16,
    margin: 10,
    backgroundColor: Colors.steelBlue,
    borderRadius: 18
}
});
