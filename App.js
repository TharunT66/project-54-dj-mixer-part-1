import * as React from 'react';
import { Text, View, Button, TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync (
       {uri: 'https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/DJ%20Rewind-7815-Free-Loops.com.mp3'},{shouldPlay: true}
     )
  }

  

  render() {
    return (
    <TouchableOpacity style = {{
      marginLeft: 100, 
      marginTop: -175,
      borderWidth: 1,
      borderColor: 'red',
      alignItems: "center",
      justifyContent: "center",
      width: 200,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 180

    }}  
    onPress= {this.playSound}>
    <Text style= {{ fontWeight: "bold", fontSize: 20}}> Press me </Text>
    </TouchableOpacity>
    );
  }
}

class SoundButton1 extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync (
       {uri: 'http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/SQUKSCRH.WAV'},{shouldPlay: true}
     )
  }

  render() {
    return (
    <TouchableOpacity style = {{
      marginLeft: 100, 
      marginTop: 100,
      borderWidth: 1,
      borderColor: 'red',
      alignItems: "center",
      justifyContent: "center",
      width: 200,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 180

    }}  
    onPress= {this.playSound}>
    <Text style= {{ fontWeight: "bold", fontSize: 20}}> Press me </Text>
    </TouchableOpacity>
    );
  }
}

 class SoundButton2 extends React.Component{
    playSound = async () => {
     await Audio.Sound.createAsync (
       {uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},{shouldPlay: true}
     )
  }

  

  render() {
    return (
    <TouchableOpacity style = {{
      marginLeft: 100, 
      marginTop: 100,
      borderWidth: 1,
      borderColor: 'red',
      alignItems: "center",
      justifyContent: "center",
      width: 200,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 180

    }}  
    onPress= {this.playSound}>
    <Text style= {{ fontWeight: "bold", fontSize: 20}}> Press me </Text>
    </TouchableOpacity>
    );
  }
 }

 class SoundButton3 extends React.Component{
   playSound = async () => {
     await Audio.Sound.createAsync (
       {uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},{shouldPlay: true}
     )
  }

  

  render() {
    return (
    <TouchableOpacity style = {{
      marginLeft: 100, 
      marginTop: 100,
      borderWidth: 1,
      borderColor: 'red',
      alignItems: "center",
      justifyContent: "center",
      width: 200,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 180

    }}  
    onPress= {this.playSound}>
    <Text style= {{ fontWeight: "bold", fontSize: 20}}> Press me </Text>
    </TouchableOpacity>
    );
  }
 }

 class SoundButton4 extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync (
       {uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},{shouldPlay: true}
     )
  }

  

  render() {
    return (
    <TouchableOpacity style = {{
      marginLeft: 100, 
      marginTop: 100,
      borderWidth: 1,
      borderColor: 'red',
      alignItems: "center",
      justifyContent: "center",
      width: 200,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 180

    }}  
    onPress= {this.playSound}>
    <Text style= {{ fontWeight: "bold", fontSize: 20}}> Press me </Text>
    </TouchableOpacity>
    );
  }
 }

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
        <SoundButton1/>
        <SoundButton2/>
        <SoundButton3/>
        <SoundButton4/>
      </View>
    );
  }
}


