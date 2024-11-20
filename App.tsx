import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import Carousel from "pinar";
import './global.css';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1'>
      <StatusBar style="auto" />
      <Carousel onIndexChanged={(i) => console.log(i)} showsControls={false} activeDotStyle={{ width: 20, height: 10, borderRadius: 25, backgroundColor: "#000", marginLeft: 3}} dotStyle={{ width: 10, height: 10, borderRadius: 25, backgroundColor: "#e3e3c1", marginLeft: 3 }}>
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
      {/* <View className='absolute flex-row justify-between items-center bottom-12 w-screen py-3 px-12'>
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
      </View> */}
    </View>
  );
}

