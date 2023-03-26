import { View, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import Main from './Main';


const BaloonMain = ({navigation}) => {
    const [ropHeight, setHeight] = useState(200);
    const [bottom, setBottom] = useState('6%');

    const animation = useSharedValue({ width: 200, height: 200, borderRadius: 200 })

    const animationStyle = useAnimatedStyle(() => {
        return {
            width: withTiming(animation.value.width, {
                duration: 1000
            }),
            height: withTiming(animation.value.height, {
                duration: 600
            }),
            borderRadius: withTiming(animation.value.height, {
                duration: 600
            })
        }
    })
    return (
        <View style={styles.container}>
            <View style={{height:"50%",flexDirection:'column'}}>
            <Animated.View style={[styles.box, animationStyle]} />
            <View style={{
                marginHorizontal:100,
                width: 2,
                height: ropHeight,
                backgroundColor: 'white',
            }}>

            </View>

            </View>
            
            <View style={{height:"50%"}}>
            <TouchableOpacity style={styles.btn} onPress={() => {
                animation.value = { width: 300, height: 300, borderRadius: 300 };
                setHeight(40)
                setBottom("3%")

            }}><Text style={{ color: '#D1B000'}}>inflate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => {
                animation.value = { width: 200, height: 200, borderRadius: 200 };
                setHeight(200)
                setBottom("6%")

            }}><Text style={{ color: '#D1B000'}}>Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Main")
            }} style={styles.btn}><Text style={{ color:'#D1B000'}}>GO To Main Page</Text></TouchableOpacity>

            </View>
           

        </View>
    );
}




export default BaloonMain;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor:'black'
    },
    /*baloon:{
        
        top:'10%',
        width:200,
        height:200,
        backgroundColor:'red',
        borderRadius:_size,
    },*/
    box: {
        backgroundColor: '#D1B000',
        borderRadius: 200,
    },
    btn: {
        borderWidth: 1,
        borderColor: '#D1B000',
        borderRadius: 10,
       padding:20,
       justifyContent:'center',
       alignItems:'center',
        margin: 20,
    },
    btn: {
        borderWidth: 1,
        borderColor: '#D1B000',
        borderRadius: 10,
       padding:20,
       justifyContent:'center',
       alignItems:'center',
        margin: 20,
    },
})