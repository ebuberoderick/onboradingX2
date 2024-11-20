import "../../global.css"
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from "expo-status-bar"

const _layout = () => {
    return (
        <>
            <StatusBar style="auto" />
            <Stack screenOptions={{ headerShown: false }} />
        </>

    )
}

export default _layout