import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ImageBackground, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('assets\pexels-zaksheuskaya-1568607.jpg')}>
      <Text>Happy Hooray</Text>
      <StatusBar style="auto" />
      </ImageBackground>
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
