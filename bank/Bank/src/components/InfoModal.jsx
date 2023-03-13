import { React } from 'react'
import { Text, View, StyleSheet } from "react-native"

export default (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.hiddenCash}>
                            
                        </View>
                        <View>
                            <Text style={{ fontWeight: "800", fontSize: 18 }}>{props.name}</Text>
                            <Text style={{ fontWeight: '400', fontSize: 12 }}>{props.subtext}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontWeight: "900", fontSize: 25, color: "#0565fd" }}>${props.value}</Text>
                    </View>
                </View>
                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontWeight: "800", fontSize: 17 }}>{props.number}</Text>
                        <Text style={{ fontWeight: '400', fontSize: 12 }}>{props.description}</Text>
                    </View>
                    <View>
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>${props.value}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",

        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: 'red',

        marginTop: 35,

        
        // borderBottomLeftRadius: 15
    },
    subContainer: {
        width: "95%",
        height: 120,

        paddingLeft: 10,
        paddingRight: 10,

        backgroundColor: "#fafafc",
        // backgroundColor: 'red',

        borderRadius: 15,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

    },
    hiddenCash: {
        width: 45,
        height: 45,
        backgroundColor: '#0565fd',

        borderRadius: 15,
        marginRight: 10
    }
})