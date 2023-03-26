import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Alert } from 'react-native'
import Checkbox from 'expo-checkbox';
import { React, useState } from 'react'
import Login from './Login';

const Register = ({ navigation }) => {
    const [fdata, setFdata] = useState({
        name: '',
        email: '',
        paasword: '',
        cpaasword: '',
    })
    const [error, setError] = useState(null);
    const [isChecked, setChecked] = useState(false);
    const sendToBackend = async () => {
        console.log(fdata);
        navigation.navigate("login");
        const { name, email, paasword, cpaasword } = fdata;
        const apiUrl = "http://localhost:5000/register"; // replace with your own API endpoint
        const data = {
           name,email,paasword,cpaasword
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin':'*',
            },
            body: JSON.stringify(data),
        };
        fetch(apiUrl, options)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
            })
            .catch((error) => {
                console.error(error);
            });


    }
    return (
        <View style={styles.main}>

            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.childh}><Text style={styles.heading}>SignUp</Text></View>
                <View style={styles.child1}>
                    <Text style={styles.txt}>Enter Your Name</Text>
                    <TextInput style={styles.input} onChangeText={(actual) => {
                        setFdata({ ...fdata, name: actual })
                    }} />
                </View>
                <View style={styles.child1}>
                    <Text style={styles.txt}>Enter Your Email</Text>
                    <TextInput style={styles.input} onChangeText={(actual) => {
                        setFdata({ ...fdata, email: actual })
                    }} />
                </View>
                <View style={styles.child1}>
                    <Text style={styles.txt}>Enter Your Password</Text>
                    <TextInput secureTextEntry={true} style={styles.input} onChangeText={(actual) => {
                        setFdata({ ...fdata, paasword: actual })
                    }} />
                </View>
                <View style={styles.child1}>
                    <Text style={styles.txt}>Confirm Your Password</Text>
                    <TextInput secureTextEntry={true} style={styles.input} onChangeText={(actual) => {
                        setFdata({ ...fdata, cpaasword: actual })
                    }} />
                </View>
                <View style={styles.child1}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Checkbox style={styles.checkbox}
                            value={isChecked}
                            onValueChange={() => {
                                setChecked(!isChecked)
                            }}
                            color={isChecked ? '#D1B000' : undefined}
                        />
                        <Text style={{ color: 'white' }}>I have Read All Terms and Conditions</Text>
                    </View>
                    <TouchableOpacity style={styles.brd} onPress={() => {
                        sendToBackend();
                    }}><Text style={styles.btn}>Register</Text></TouchableOpacity>
                </View>
            </KeyboardAvoidingView>


        </View>

    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        bottom: 0,
        position: 'absolute',
        borderTopWidth: 10,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        flexDirection: 'column',
        backgroundColor: 'black',
        height: "95%",
        width: "100%",
        padding: 30,
    },
    childh: {
        width: "100%",
        height: 100,
    },
    child1: {
        width: "100%",
        height: 100,
    },
    heading: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#D1B000',
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#D1B000',
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 2,
        padding: 10,
        borderRadius: 20,
        borderColor: '#D1B000',
    },
    errorMsg: {
        fontSize: 5,
        fontWeight: 'bold',
        color: '#fff',
    },
    brd: {
        borderWidth: 1,
        borderColor: '#D1B000',
        borderRadius: 10,
        paddingLeft: 80,
        paddingRight: 80,
        margin: 20,
    },
    btn: {
        color: "white",
        fontSize: 20,
    },
    last: {
        width: "100%",
        height: "30%",
    }






})
export default Register