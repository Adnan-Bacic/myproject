import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

const App = () => {

  
  const [name, setName] = useState('Adnan');
  const [age, setAge] = useState('22');
  const [person, setPerson] = useState({ name: 'mario', age: 40 });
  
  const clickHandler = () => {
    setName('Adnan2');
    setPerson({ name: 'luigi', age: 45 });
  }

  const inputChangeName = (val) => {
    setName(val)
  }
  const inputChangeAge = (val) => {
    setAge(val)
  }

  const pressHandler = (id) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  const [people, setPeople] = useState([
    { name: 'name1', id: '1' },
    { name: 'name2', id: '2' },
    { name: 'name3', id: '3' },
    { name: 'name4', id: '4' },
    { name: 'name5', id: '5' },
    { name: 'name6', id: '6' },
    { name: 'name7', id: '7' },
    { name: 'name8', id: '8' },
    { name: 'name9', id: '9' },
    { name: 'name10', id: '10' }
  ]);

  return(
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello world</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem ipsum <Text>TEST</Text> dolor sit amet</Text>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
        <Text>His name is {person.name} and age is {person.age}</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={clickHandler} title="Update name state"></Button>
        </View>
      </View>


      <View>
        <Text>Enter name:</Text>
        <TextInput onChangeText={inputChangeName} multiline style={styles.input} placeholder="Name"></TextInput>
        <Text>Enter age:</Text>
        <TextInput onChangeText={inputChangeAge} keyboardType="numeric" style={styles.input} placeholder="Name"></TextInput>
      </View>

      <Text>Scrollview:</Text>
      <ScrollView>
        { people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>

      <Text>Flatlist:</Text>
      <FlatList data={people} numColumns={2} keyExtractor={(item) => item.id} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}>

      </FlatList>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    backgroundColor: 'pink',
    padding: 20
  },
  boldText:{
    fontWeight: 'bold'
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20
  },
  buttonContainer:{
    marginTop: 20
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  }
});

export default App;