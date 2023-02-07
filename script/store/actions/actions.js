export const newTimerUser = (timer, startTimer, speedTimer, useState, nameArr) => ({
    type: 'ADD_USER_VARISBLE_TIMER',
    payload : {timer, startTimer, speedTimer, useState, nameArr}
})