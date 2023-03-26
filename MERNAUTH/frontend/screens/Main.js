
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Main({navigation}) {
    const handleLogin=()=>{
        navigation.navigate("login");
    }
    const handleSignup=()=>{
        navigation.navigate("register");
    }
  return (
    <View style={styles.container}>
      <View style={styles.containersub}>
        <View style={styles.content}>
          <Image style={styles.logo} source={require("./images/Logo.png")} />
        </View>
        <View style={styles.content2}>
          <TouchableOpacity onPress={handleLogin} style={styles.brd}><Text style={styles.btn}>Login</Text></TouchableOpacity>
          <TouchableOpacity onPress={handleSignup} style={styles.brd}><Text style={styles.btn}>Signup</Text></TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  containersub: {
    flexDirection: 'column',
    top: 0,
    justifyContent:'space-between',
    alignItems: 'center',
  },
  content: {
    width: "100%",
    marginTop: 100,
    height: "30%",
  },
  logo: {
    width: "100%",
    height: 300,
  },
  content2: {
    width:"100%",
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent:'space-evenly'
  },
  brd: {
    borderWidth: 1,
    borderColor: '#D1B000',
    borderRadius: 10,
    padding: 10,
    margin:20,
  },
  btn: {
    color: '#D1B000',
    fontSize: 50,
    fontWeight: 'bold',
  }


});
