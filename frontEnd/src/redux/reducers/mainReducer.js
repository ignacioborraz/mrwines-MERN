//importo los componentes de REDUX:
import {combineReducers} from 'redux'

//importo los redutores de REDUX que se van a combinar:
import wineReducer from './wineReducer'

const mainReducer = combineReducers({wineReducer})

export default mainReducer
