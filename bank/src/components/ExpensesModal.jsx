import React from "react";
import { View, Text, StyleSheet } from "react-native"

export default (props) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 0, marginBottom: 0, marginRight: 10}}>
                <Text style={{ margin: 0, fontSize: 16, fontWeight: 'bold'}}>23</Text>
                <Text style={{ margin: 0, fontSize: 16, fontWeight: 'bold'}}>Oct</Text>
            </View>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{props.title}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 12, color: "#dcdde1" }}>{props.subtitle}</Text>
            </View>
            <View style={{ marginLeft: "40%" }}>
                <Text style={{ fontWeight: 'bold' }}>R${props.value}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 70,

        marginTop: 5,
        marginBottom: 5,
        marginLeft: 15,
        marginRight: 15,

        borderRadius: 15,
        paddingLeft: 15,

        flexDirection: 'row',

        alignItems: 'center',

        backgroundColor: '#fafafc',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    }

})