import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native"
import InfoModal from "../components/InfoModal";
import ExpensesModal from "../components/ExpensesModal";
import { Icon, Button } from '@rneui/themed';
import globalstyle from '../../styles/GlobalStyles'

export default (props) => {
    const data = [
        {key: '1', date: '2023-10-22', title: 'Bicicleta', subtitle: 'Comprei na caloi', value: '980,35'},
    ]
    
    return (
        <View style={globalstyle.container}>
            <View style={globalstyle.subcontainer}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "space-between" }}>
                    <View>
                        <Button
                            containerStyle={{ width: 43, borderRadius: 50, marginTop: 5, marginLeft: 5 }}
                            icon={
                                <Icon name="add"
                                color={"white"} />
                            }
                            onPress={() => props.navigation.navigate("Despesas")}
                        />
                    </View>
                    <View style={{ marginRight: "32%" }}>
                        <Text style={styles.titleScreen}>Lista de despesas</Text>
                    </View>
                </View>
                <InfoModal
                    name="John Williams"
                    subtext="Algum texto aqui"
                    value="293,42"
                    number="E408 0004 7192 8273"
                    description="Algum texto aqui"
                />
            </View>
            <View style={styles.listcontainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item}) => <ExpensesModal title={item.title} subtitle={item.subtitle} value={item.value} date={item.date}/>}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleScreen: {
        fontSize: 20,
        fontWeight: "bold",

        color: '#fafafc',
    },
    listcontainer: {
        flex: 0.80,

        width: '100%',

        marginTop: 100,
        marginBottom: 1,
    }
})

