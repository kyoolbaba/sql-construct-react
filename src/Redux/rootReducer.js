import {combineReducers} from 'redux'
import parameterReducer from './parameter/parameterReducer'
const rootReducer=combineReducers(
    {
        parameterReducer:parameterReducer
    }
)

export default rootReducer