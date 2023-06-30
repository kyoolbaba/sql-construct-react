import { createTheme } from "@mui/material"
import {legacy_createStore as createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from "./rootReducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;

const store = createStore(rootReducer,applyMiddleware(logger,thunk))

export default store