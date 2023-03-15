import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, StatusBar } from "react-native"
import { LineChart, BarChart, PieChart } from "react-native-chart-kit"

import globalstyles from "../../styles/GlobalStyles"

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
        {
        data: [20, 45, 28, 80, 99, 43]
        }
    ]
}

const data2 = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

export default () => {
    return (
        <View style={globalstyles.container}>
            <View style={globalstyles.subcontainer}>
                <View style={styles.containerTitle}>
                    <Text style={styles.titleScreen}>Gráficos</Text>
                </View>    
            </View>
            <View style={{ width: '100%', flex: 1, paddingBottom: 15 }}>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                    style={{ flex: 1 }
                }>
                    <LineChart
                        data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                            }
                        ]
                        }}
                        width={Dimensions.get("window").width * 0.95} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={styles.graphicStyle}
                    />
                    <BarChart
                        data={data} 
                        style={styles.graphicStyle}
                        width={Dimensions.get("window").width * 0.95}
                        height={220}
                        yAxisLabel="$"
                        chartConfig={charConfig}
                        verticalLabelRotation={30}
                    />
                    <LineChart
                        data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                            }
                        ]
                        }}
                        width={Dimensions.get("window").width * 0.95} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                        }}
                        bezier
                        style={styles.graphicStyle}
                    />
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerTitle: {
        height: '100%',

        alignItems: "center",
        justifyContent: "center",
    },
    titleScreen: {
        fontSize: 20,
        fontWeight: "bold",

        color: "#fafafc"
    },
    graphicStyle: {
        alignItems: "center",
        marginVertical: 8,
        borderRadius: 16
    }
})

const charConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
    }
}