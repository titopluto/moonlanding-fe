import appReducer from '../reducers'
import reduxThunk from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'
import { autoRehydrate } from 'redux-persist'

// const consoleMessages = store => next => action => {
// 	let result
//
// 	console.groupCollapsed(`dispatching action => ${action.type}`)
// 	// console.log('Active Pod', store.getState().active_pod)
// 	result = next(action)
//
// 	let { all_pods, active_pod } = store.getState()
//
// 	console.log(`
//
// 		all pods: ${all_pods}
// 		active pod: ${active_pod}
// 	`)
//
// 	console.groupEnd()
//
// 	return result
//
// }

// export default (initialState = {}) => {
//   return applyMiddleware(reduxThunk)(createStore)(appReducer, initialState)
// }


const middlewares = [ reduxThunk ]

const enhancers = [
  applyMiddleware(...middlewares),
  autoRehydrate(),
  window.devToolsExtension ? window.devToolsExtension() : f => f
]


const store = createStore(appReducer, compose(...enhancers) )



export default store
