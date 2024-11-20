import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import Carousel from "pinar";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useRef, useState } from 'react';
import { Link } from 'expo-router';

export default function App() {

    const [activeIndex, updateindex] = useState(0)
    const carouselRef = useRef()

    const switchIndex = (index) => {
        updateindex(index)
    }

    return (
        <View className='flex-1'>
            <StatusBar style="auto" />
            <Carousel ref={carouselRef} onIndexChanged={(i) => switchIndex(i.index)} showsControls={false} showsDots={false} activeDotStyle={{ width: 20, height: 10, borderRadius: 25, backgroundColor: "#000", marginLeft: 3 }} dotStyle={{ width: 10, height: 10, borderRadius: 25, backgroundColor: "#e3e3c1", marginLeft: 3 }}>
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
                <Link replace href="/login?first=ebube">
                    <Text>Skip</Text>
                </Link>
                <View className='flex-row gap-2'>
                    <View className={`h-2 rounded-full ${activeIndex === 0 ? "bg-slate-900" : "bg-slate-400"}`} style={{ width: activeIndex === 0 ? 20 : 8 }} />
                    <View className={`h-2 rounded-full ${activeIndex === 1 ? "bg-slate-900" : "bg-slate-400"}`} style={{ width: activeIndex === 1 ? 20 : 8 }} />
                    <View className={`h-2 rounded-full ${activeIndex === 2 ? "bg-slate-900" : "bg-slate-400"}`} style={{ width: activeIndex === 2 ? 20 : 8 }} />
                </View>
                {
                    activeIndex > 1 ? (
                        <Link replace href="/login?first=ebube" >
                            <Text>Get Started</Text>
                        </Link>
                    ) : (
                        <TouchableOpacity onPress={() => carouselRef.current.scrollToNext()}>
                            <Text>Next</Text>
                        </TouchableOpacity>
                    )
                }

            </View>
        </View>
    );
}

