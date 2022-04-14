//importo los componentes de REDUX:
import {combineReducers} from 'redux'

//importo los redutores de REDUX que se van a combinar:
import wineReducer from './wineReducer'
import userReducer from './userReducer'
import topicReducer from './topicReducer'

const mainReducer = combineReducers({wineReducer,userReducer,topicReducer})

export default mainReducer
