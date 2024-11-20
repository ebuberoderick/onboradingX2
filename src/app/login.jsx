import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const login = () => {
  const { first, last } = useLocalSearchParams()
  return (
    <View className='flex-1 w-screen items-center justify-center'>
      <Text>login</Text>
      <Text>{first}</Text>
      <Text>{last}</Text>
    </View>
  )
}

export default login