import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Text, View, StyleSheet, SafeAreaView } from 'react-native'

import Home from './screens/home'
import FormExpense from './screens/formExpense'

const Tab = createBottomTabNavigator()

const screenOptions = {
    headerShown: false
}

export default () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={screenOptions}
                    initialRouteName="Home"
                >
                    <Tab.Screen name="Home" component={Home}/>
                    <Tab.Screen name="Despesas" component={FormExpense}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})