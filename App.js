import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6){
      alert('Voce está abaixo do peso!' + imc.toFixed(2));
    } else if(imc >= 18.6 && imc < 24.9){
      alert('Peso ideal!' + imc.toFixed(2));
    } else if(imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso!' + imc.toFixed(2));
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcule o seu IMC</Text>
     
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso) }
        placeholder="Peso (Kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura) }
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#121212',
    fontSize: 23
  },
  button: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#41Aef4',
    margin: 15,
    padding: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 25
  }
});
