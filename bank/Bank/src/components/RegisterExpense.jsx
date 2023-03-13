import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, ScrollView } from 'react-native'
import { Input, Icon, CheckBox, Button } from '@rneui/themed'
import DropDownPicker from 'react-native-dropdown-picker';

export default (props) => {

    const [check, setCheckbox] = useState(0)
    const [modalVisible, setModalVisible] = useState(false)
    const [description, setDescription] = useState('')
    const [expense, setExpense] = useState('')
    const [value, setValue] = useState('')
    const [parcel, setParcel] = useState('')

    const [expenseError, setExpenseError] = useState('')
    const [valueError, setValueError] = useState('')
    const [parcelError, setParcelError] = useState('')
    const [descriptionError, setDescriptionError] = useState('')

    /**
     * Validação do formulário
     */
    const handleSubmit = () => {
        let expenseValid = false
        let valueValid = false
        let parcelValid = false
        let descriptionValid = false

        if(expense.length == 0) {
            setExpenseError("Despesa é um campo obrigatório")
        }
        else if(expense.indexOf(' ') >= 0) {
            setExpenseError("Despesa não pode ser um campo vazio")
        }
        else {
            setExpenseError("")
            expenseValid = true
        }

        if(value.length == 0) {
            setValueError("Valor é um campo obrigatório")
        }
        else if(expense.indexOf(' ') >= 0) {
            setValueError("Valor não pode ser um campo vazio")
        }
        else {
            setValueError("")
            valueValid = true
        }

        if(description.indexOf(' ') >= 0) {
            setDescriptionError("Descrição não pode ser um campo vazio")
        }
        else {
            setDescriptionError("")
            descriptionValid = true
        }

        if (parcel.length == 0) {
            setParcelError("Parcela é um campo obrigatório")
        }
        else {
            setParcelError("")
            parcelValid = true
        }
    }
    
    return (
        <>
            <View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalSubcontainer}>
                            <Input
                                style={styles.input}
                                inputContainerStyle={styles.inputContainer}
                                placeholder="Digite uma descrição"
                                errorMessage={descriptionError}
                                errorStyle={styles.inputError}
                                maxLength={100}
                                onChangeText={description => setDescription(description)}
                            />
                            <Button
                                title='Ok'
                                containerStyle={{ width: '90%', borderRadius: 15 }}
                                onPress={() => setModalVisible(!modalVisible)}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleInput}>Digite o nome da despesa</Text>
                        </View>
                        <Input
                            placeholder='Despesa'
                            inputStyle={styles.input}
                            inputContainerStyle={styles.inputContainer}
                            errorMessage={expenseError}
                            errorStyle={styles.inputError}
                            leftIcon={
                                <Icon
                                    containerStyle={{ justifyContent: 'center' }}
                                    name='drive-file-rename-outline'
                                />
                            }
                            onChangeText={expense => setExpense(expense)}
                        />
                    </View>
                    <View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleInput}>Digite o valor da despesa</Text>
                        </View>
                        <Input
                            placeholder='Valor'
                            keyboardType='numeric'
                            inputStyle={styles.input}
                            inputContainerStyle={styles.inputContainer}
                            errorMessage={valueError}
                            errorStyle={styles.inputError}
                            maxLength={6}
                            leftIcon={
                                <Icon
                                    name='attach-money'
                                />
                            }
                            onChangeText={value => setValue(value)}
                        />
                    </View>
                    <View>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleInput}>Sua compra foi feita com cartão de crédito?</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 60, marginRight: 60 }}>
                            <CheckBox
                                title='Sim'
                                checkedIcon={"dot-circle-o"}
                                uncheckedIcon="circle-o"
                                wrapperStyle={{ backgroundColor: "#f8f8f8" }}
                                containerStyle={{ backgroundColor: "f8f8f8" }}
                                checked={check === 1}
                                onPress={() => setCheckbox(1)}
                            />
                            <CheckBox
                                title='Não'
                                checkedIcon={"dot-circle-o"}
                                uncheckedIcon="circle-o"
                                wrapperStyle={{ backgroundColor: "#f8f8f8" }}
                                containerStyle={{ backgroundColor: "f8f8f8" }}
                                checked={check === 0}
                                onPress={() => [setCheckbox(0), setParcel('')]}
                            />
                        </View>
                    </View>
                    <View>
                        {check ?
                            <View>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.titleInput}>Parcelamento</Text>
                                </View>
                                <Input
                                    placeholder='Nº de parcelas'
                                    inputStyle={styles.input}
                                    keyboardType='numeric'
                                    maxLength={2}
                                    errorMessage={parcelError}
                                    errorStyle={styles.inputError}
                                    inputContainerStyle={styles.inputContainer}
                                    leftIcon={
                                        <Icon 
                                            name='info-outline'
                                        />
                                    }
                                    onChange={parcel => setParcel(parcel)}
                                />
                            </View>
                            :
                            <></>
                        }
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Button
                            title="Adicionar descrição"
                            containerStyle={{ width: '90%', borderRadius: 15 }}
                            onPress={() => setModalVisible(true)}
                        />
                    </View>
                    <View style={check ? { alignItems: 'center', marginTop: 28 } : { alignItems: 'center', marginTop: 130 }}>
                        <Button
                            title="Salvar"
                            containerStyle={{ width: '90%', borderRadius: 15 }}
                            onPress={() => handleSubmit()}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        flexDirection: 'column'
    },
    titleContainer: {
        marginLeft: 10,
        marginTop: 2,
        marginBottom: 5
    },
    titleInput: {
        fontWeight: 'bold',
        color: '#C0C0C0'
    },
    input: {
        backgroundColor: '#DCDCDC',
        borderRadius: 15,
        paddingLeft: 10
    },
    inputContainer: {
        borderBottomColor: "transparent",
    },
    modalContainer: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 22, 
        flexDirection: 'row'
    },
    modalSubcontainer: {
        margin: 20, 
        backgroundColor: "#f8f8f8", 
        borderRadius: 20, 
        padding: 35, 
        alignItems: "center", 
        shadowColor: "#000", 
        shadowOffset: { 
            width: 0, 
            height: 2 
        }, shadowOpacity: 0.25, 
        shadowRadius: 4, 
        elevation: 5, 
        width: '90%'
    },
    inputError: {
        color: "red"
    }

})