export const userVariable = {
    userVariable: [
        {
            timer:      10,         // Предельное значение таймера в секундах
            startTimer: 0,          // Начальное значение
            speedTimer: 1000,       // скорость таймера
            useState:   'setLoops', // стейт расчета
            nameArr:    'test[0]'   // ячейка массива с ид таймера
        }
    ]
}

export const useReducer = (state = userVariable, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_USER_VARISBLE_TIMER:
            return {
                ...state,
                [payload] : [
                    {
                        timer: payload.timer,
                        startTimer: payload.startTimer,
                        speedTimer: payload.speedTimer,
                        useState: payload.useState,
                        nameArr: payload.nameArr
                    }
                ]
            }
    
        default:
            return state
    }
}