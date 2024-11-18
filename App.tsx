import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import Carousel from "pinar";
import './global.css';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1'>
      <StatusBar style="auto" />
      <Carousel horizontal>
        <View style={styles.slide1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>3</Text>
        </View>
      </Carousel>
    </View>
  );
}


const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a3c9a8"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#84b59f"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#69a297"
  },
  text: {
    color: "#1f2d3d",
    opacity: 0.7,
    fontSize: 48,
    fontWeight: "bold"
  }
});
