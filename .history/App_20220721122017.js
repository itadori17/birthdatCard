import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground,To, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>    
      <ImageBackground source={require('./assets/background.png')}  resizeMode="cover" style={styles.background} >
     
      <ImageBackground source={require('./assets/giphy2.gif')} resizeMode="cover" style={styles.mini} >
        <Text style={styles.text}>Happy Hooray!!!🥳🥳</Text>
        </ImageBackground>

      <View style={styles.gif} >
    <ImageBackground source={require('./assets/giphy.gif')}  style={styles.backgroundbackgif} >
    <Text style={styles.text2}></Text>
    <Text style={styles.p}>Forget the past; look forward to the future, for the best things are yet to come.</Text>
    </ImageBackground>
      </View>


      

      
      </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
        elevation: 3,
        backgroundColor: "pink",
        shadowOffset: {width:1, height:1 },
        shadowColor: "#333",
        shadowOpacity: 0.9,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        justifyContent: "center"
  },backgroundbackgif: {

    width: '100%',
    height: 300,
    resizeMode: 'stretch',
    justifyContent: "center"

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

  }, text2: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
   
  },p: {
    color: "white",
    fontSize: 15,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
   
  },
  cardContent: {
    marginHorizontal: 28,
    marginVertical: "50%",
}
});
