import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';
import { React, useState } from 'react'

const Login = ({navigation}) => {
    const [fdata, setFdata] = useState({
        email: '',
        paasword: '',
    })
    const [error, setError] = useState(null);
    const sendToBackend = async () => {
        console.log(fdata);
        navigation.navigate("home");
        const { name, email, paasword, cpaasword } = fdata;
        const apiUrl = "http://localhost:5000/login"; // replace with your own API endpoint
        const data = {
           email,paasword
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
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <View style={styles.child1}><Text style={styles.heading}>Login</Text></View>
                <View style={styles.child1}>
                    <Text style={styles.txt}>Enter Your Email</Text>
                    <TextInput style={styles.input} />
                </View>
                <View style={styles.child1}>
                    <Text style={styles.txt}>Enter Your Password</Text>
                    <TextInput autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true} style={styles.input} />
                    </View>
                <View style={styles.child1}>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <Checkbox style={styles.checkbox}
                        value={isChecked}
                        onValueChange={() => {
                            setChecked(!isChecked)
                        }}
                        color={isChecked ? '#D1B000' : undefined}
                    />
                    <Text style={{color:'white'}}>I have Read All Terms and Conditions</Text>

                    </View>
                   
                    <TouchableOpacity onPress={sendToBackend} disabled={isChecked==true?false:true} style={styles.brd}><Text style={styles.btn}>Login</Text></TouchableOpacity>
                    </View>
            </View>



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
        alignItems: 'center',
        padding: 50,
    },
    child1: {
        width: "100%",
        height: 100,
    },
    heading: {
        fontSize: 60,
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
    last:{
        width: "100%",
        height: "30%",
    }
    

    
   


})
export default Login