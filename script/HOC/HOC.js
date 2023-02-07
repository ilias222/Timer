import { handleFormatTime } from "../Inspect/Agent"
import {Musik} from "../Inter_compos/Musik"
import { Vibrate } from "../Inter_compos/Vibrate"

export function HocTimer(tim, celsLoop, stateSet, loop, nameInterval, interval, typeSound) {
    return setInterval(() => {
             if(celsLoop < loop){
                stateSet(handleFormatTime(celsLoop))
                 celsLoop++     
             }
             if (interval == celsLoop){
                typeSound ? Musik() : Vibrate(1000)
             }
             if(celsLoop === loop){
                 clearInterval(nameInterval)
                 celsLoop++
                 console.log(typeSound)
                 typeSound ? Musik() : Vibrate(1000)
                 console.log('Re Sound')
             }
        }, tim)
    
}