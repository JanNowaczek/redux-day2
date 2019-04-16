import { createStore, combineReducers } from 'redux'

import counter, { incActionCreator } from './state/counter'

const rootReducer = combineReducers({
    counter,
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

window.inc = () => store.dispatch(incActionCreator())

