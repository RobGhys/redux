import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import App from './App'

import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

// State of the store
const reducer = combineReducers({
    notes: noteReducer,
    filter: filterReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)

console.log(store.getState())

// the App is a child of Provider component (from react redux)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// Simulate creation of note and change filter state
store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))