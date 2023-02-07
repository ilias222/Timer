let min = 0
let sek = 0

export const handleFormatTime = (timApp) => {
    if(timApp>= 0){
    ++sek
    sek >= 10 ? sek = sek : sek = `0${sek}`

    if(sek >= 60){
        sek = '00'
        min = ++min
    }
} else {
    min = 0
    sek = 0
}
    console.log(min, sek)
    return timApp = `${min}:${sek}`
}