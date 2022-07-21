import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground,To, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.card}>
      <ImageBackground source={require('./assets/background.png')}  resizeMode="cover" style={styles.background} >
      <Text style={styles.text}>Happy Hooray</Text>

      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width:1, height:1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
   
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
  }
});
