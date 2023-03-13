import React from "react";
import { View, Text, StyleSheet } from "react-native";
import globalstyles from "../../styles/GlobalStyles"

import RegisterExpense from "../components/RegisterExpense";

export default (props) => {
    return (
        <View style={globalstyles.container}>
            <View style={[globalstyles.subcontainer]}>
                <View style={styles.containerTitle}>
                    <Text style={styles.titleScreen}>Despesas</Text>
                </View>
            </View>
            <View style={{ width: '100%' }}>
                <RegisterExpense/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        height: '100%',

        alignItems: "center",
        justifyContent: "center",

        // backgroundColor: 'red'
    },
    titleScreen: {
        fontSize: 20,
        fontWeight: "bold",

        color: '#fafafc',
    }
})
