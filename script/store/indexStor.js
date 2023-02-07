import { createStore, compose, combineReducers, applyMiddleware } from 'redux'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    reducer: reducer,
})

export const store = createStore (rootReducer, composeEnhancers())