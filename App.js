import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';

export default function App() {

const [name, setName] = useState('Nicolle chata')
const [input,setInput] = useState('')

function trocaNome() {

  setName(input)

}

  return (
    <View style={styles.container}>
    <TextInput style = {styles.input} value = {input} onChangeText = {(texto) => setInput(texto)} />
    <TouchableOpacity style = {styles.botao} onPress = {()=> trocaNome()} > TROCAR </TouchableOpacity>
      <Text> {name} </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    width:'90%',
    backgroundColor: 'orange',
    alignItems: 'center',
    margimTop: '10',
  },
  input: {
    height: 35,
    width: '90%',
    marginTop: 10,
    borderRadius: 3,
    borderWidth: 2,
    margin: 5,
   
  }
});
