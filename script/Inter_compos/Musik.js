import { Audio } from 'expo-av'


export async function Musik() {
    console.log('Loading Sound')
    const { sound } = await Audio.Sound.createAsync( require('../../files/zvonok.mp3'))
    await sound.playAsync()
  }
