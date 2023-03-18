import {useState} from 'react';
import Banner from './components/Banner';
import { StyleSheet, Text, View, } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={[styles.container,{flex:1}]}>
      <View style={[styles.container,styles.views,{flex:1,backgroundColor:'powderblue',}]}>
        <Banner name='notas'></Banner>
      </View>
      <View style={[styles.container,styles.views,{flex:6,backgroundColor:'lightcyan',}]}>
      <Text>CALIFICACIONES</Text>
      
      <Text>Identificacion</Text>
      <TextInput
        placeholder='Ingrese id'
        style={styles.inputs}
      />
      <Text>Nombres</Text>
      <TextInput
        placeholder='Ingrese nombres'
        style={styles.inputs}
      />
      <Text>Asignatura</Text>
      <TextInput
        placeholder='Ingrese Asignatura'
        style={styles.inputs}
      />
      <Text>Nota 1</Text>
      <TextInput
        placeholder='Ingrese 1er nota'
        style={styles.inputs}
      />
      <Text>Nota 2</Text>
      <TextInput
        placeholder='Ingrese 2da nota'
        style={styles.inputs}
      />
      <Text>Nota 3</Text>
      <TextInput
        placeholder='Ingrese 3era nota'
        style={styles.inputs}
      />
      <Text>Definitiva</Text>
      <TextInput
        placeholder=''
        style={styles.inputs}
      />
      <Text>Observaciones</Text>
      <TextInput
        placeholder=''
        style={styles.inputs}
      />

    
      </View>
    
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  views: {
    width:'100%',
    heigth:'100%',
    borderColor:'black',
    borderWidth:2,
    borderRadius:5
  },

  inputs:{
    color:'lightgray',
    borderRadius:10,
    padding:10,
    width:150,
    borderWidth:2,
    borderColor:'gray',
    textAlign:'center',
    marginTop:10
  }
});
