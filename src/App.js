import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const App = () => {

  const [number, setNumber] = useState('Random Number')

  function handleNumber() {
    const new_number = Math.floor(Math.random() * 100);

    setNumber(new_number);
  };

  return (
    <SafeAreaView style={style.container}>
        <Text style={style.number}>{number}</Text>
        <TouchableOpacity onPress={handleNumber} style={style.button}>
          <Text>Gerar Number</Text>
        </TouchableOpacity>
    </SafeAreaView>
    
  )
}

export default App


const style = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 38,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 12,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
})