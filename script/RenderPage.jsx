import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { HocTimer } from './HOC/HOC';
import { handleFormatTime } from './Inspect/Agent';
import { Buttons } from './UI/Button';
import { ButtonsOptions } from './UI/ButtonOptions';
import { Musik } from './Inter_compos/Musik';
import { Vibrate } from './Inter_compos/Vibrate';



let test = []

export const RenderPage = () => {
  const [toggle, setToggle] = useState(true)
  const [cell, setCell] = useState('0:00')
  const [maxTimer, setMaxTimer] = useState(10)
  const [minTimer, setMinTimer] = useState(0)
  const [speedTimer, setSpeedTimer] = useState(1000)
  const [types, setTypes] = useState(true)
  const [timeof, setTimeof] = useState(0)
  const [hover, setHover] = useState(true)
  const [shadow, setShadow] = useState(true)

  const handleStopPres = () =>{
    let min
    let sek
    cell[0] == 0 ?
    min = parseInt(cell[0]) * 60
    :
    min = parseInt(cell[0] + cell[1]) * 60
    cell[1] === ":" ?
    sek = parseInt(cell[2] + cell[3]) 
    :
    sek = parseInt(cell[3] + cell[4]) 
    console.log('time', sek)
    return maxTimer - (min + sek) 
  }
  
  return (
    <View
    style = {styles.box} 
    >
      <Image
      style = {styles.boxImage}
      source={shadow ? require('../files/moning.jpg') : require('../files/horce.jpg')}
      />
      <View
      style = {styles.optionsHover}
      >
        <ButtonsOptions
         press={() => setHover(!hover)}>
           <Image
          source={require('../files/list.png')}
          /> 
        </ButtonsOptions>
      </View>
      <View style ={hover ? styles.modal : styles.modalHover}>
      <TextInput 
        onChangeText ={(newText) => setMaxTimer(Number(newText))}
        keyboardType = 'numeric'
        placeholder = {'Максимальное значение таймера'}
        />
        <TextInput 
        onChangeText ={(newText) => setMinTimer(Number(newText))}
        keyboardType = 'numeric'
        placeholder = {'Минимальное значение таймера'}
        />
        <TextInput 
        onChangeText ={newText => setSpeedTimer(Number(newText))}
        keyboardType = 'numeric'
        placeholder = {'Скорость таймера'}
        /> 
        <TextInput  
        onChangeText ={newInter => setTimeof(Number(newInter))}
        keyboardType = 'numeric'
        placeholder = {'Интервал'}
        />
  
        <Buttons
          press={() => setTypes(!types)}
          contro = {types}
        >
        {types ? 'Музыка' : 'Вибрация'}
        </Buttons>
      </View>
    
      <View style={styles.timer}>  
        <Text
        style={styles.timeUser}
        type='button'
        onPress={ toggle ? 
          () => {
              setToggle(false)
              setShadow(false)
              console.log(handleStopPres())
              test[0] = HocTimer(speedTimer, minTimer, setCell, handleStopPres(), test[0], timeof, types)
          }
          :
          () => {
              setToggle(true)
              console.log(handleStopPres())
              clearInterval(test[0])
          }
          
        }
        onLongPress = {
          () =>{
            if(cell === '0:00') return types ? Musik() : Vibrate(1000)
              setShadow(true)
              setCell(()=> '0:00')
              handleFormatTime('clean')
          }
          }
      >
          <Text
          style={styles.timeNumber}
          >
            {cell}
          </Text>
        </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
        }

        /// Вынести в отдельный файл!
const styles = StyleSheet.create({
  timer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  },
  timeUser: {
    textAlign: 'center',
    font: 35,
    fontSize: 30,
    borderStyle: ('solid'),
    borderColor: '#E6E6FA',
    borderWidth: 4,
    width: 200,
    height: 50,
  },
  timeNumber: {
    padding: 50,
    color: '#E6E6FA',
  },
  optionsTime: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  modal:{
    display: "none",
    width: 270,
    left: -30,
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'absolute',
    zIndex: 0,
    backgroundColor: '#ffff'
  },
  modalHover: {
    display: 'flex',
    width: 270,
    left: -30,
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'absolute',
    zIndex: 5,
    backgroundColor: '#ffff'
  },
  optionsHover:{
    position: 'absolute',
    zIndex: 11,
    top: -230,
    left: -30,
    width: 90,
    height: 70,
  },
  optionsIMG:{
    margin: 0,
    padding: 0,
    flex: 1,
    
  },
  box: {
    position: 'relative',
  },
  boxImage: {
    position: 'absolute',
    zIndex: -1,
    top: -390,
    left: -100,
    height: 800
  }
});
