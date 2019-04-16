import { createStore, combineReducers } from 'redux'

import counter, { incActionCreator } from './state/counter'
import toDo, { addActionCreator } from './state/toDo'

const rootReducer = combineReducers({
    counter,
    toDo,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(incActionCreator())
window.add = (text) => store.dispatch(addActionCreator(text))


