import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Note from './notes'

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            noteArray: [],
            noteText: ''
        }
        this.addNote = this.addNote.bind(this);
    }
    render(){
        let notes = this.state.noteArray.map((key,val) => {
            console.log(key)
            return <Note key={val} keyval={key} val={key}
            deleteMethod={ () => this.deleteNote(key) }/>
        })

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>- NOTER -</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View styele={styles.footer}>
                    <TextInput style={styles.textInput} placeholder='Click to add notes here' 
                    placeholderTextColor='white' underlineColorAndroid='transparent'
                    onChangeText={ (noteText) => this.setState({noteText}) }
                    value={ this.state.noteText }>
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.addButton} onPress={ this.addNote }>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
    addNote(){
        if(this.state.noteText){
            var d = new Date()
            this.state.noteArray.push({
                'date' : d.getFullYear() +
                '/' + ( d.getMonth() + 1 ) +
                '/' + d.getDate(),
                'note': this.state.noteText
            })
            this.setState({
                noteArray: this.state.noteArray,
                noteText: ''
              });
            //   console.log(this.state.noteArray)
        }
    }
    deleteNote(key){
        this.state.noteArray.splice(key, 1)
        this.setState({noteArray: this.state.noteArray})
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd'
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});

export default Main;
