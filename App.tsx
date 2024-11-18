import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import Carousel from "pinar";
import './global.css';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1'>
      <StatusBar style="auto" />
      <Carousel showsControls={false} showsDots={false}>
        <View className='flex-1 justify-center items-center dark:bg-black bg-white' key="1">
          <View className='gap-5'>
            <View className='h-96 w-96 rounded-full bg-slate-100 dark:bg-slate-700' />
            <Text className='font-semibold text-3xl text-center dark:text-white'>Welcome to Surf</Text>
            <Text className='text-gray-400 text-center max-w-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
        </View>
        <View className='flex-1 justify-center items-center dark:bg-black bg-white' key="2">
          <View className='gap-5'>
            <View className='h-96 w-96 mx-auto rounded-full bg-slate-100 dark:bg-slate-700' />
            <Text className='font-semibold text-3xl text-center dark:text-white max-w-md'>Design Template uploads Every Tuesday</Text>
            <Text className='text-gray-400 text-center max-w-sm mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
        </View>
        <View className='flex-1 justify-center items-center dark:bg-black bg-white' key="3">
          <View className='gap-5'>
            <View className='h-96 w-96 mx-auto rounded-full bg-slate-100 dark:bg-slate-700' />
            <Text className='font-semibold text-3xl text-center dark:text-white max-w-md'>Download now!</Text>
            <Text className='text-gray-400 text-center max-w-sm mx-auto'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
        </View>
      </Carousel>
      <View className='absolute flex-row justify-between items-center bottom-12 w-screen py-3 px-12'>
        <TouchableOpacity>
          <Text>Skip</Text>
        </TouchableOpacity>
        <View className='flex-row gap-2'>
          <View className='w-2 h-2 rounded-full bg-slate-900' />
          <View className='w-2 h-2 rounded-full bg-slate-400' />
          <View className='w-2 h-2 rounded-full bg-slate-400' />
        </View>
        <TouchableOpacity>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
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
