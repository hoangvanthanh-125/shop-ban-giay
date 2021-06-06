
import rootReduccers from './../reducer/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './../sagas/rootSaga'

const { createStore, applyMiddleware, compose } = require("redux")

const composeEhancer = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  shouldHotReload:false,
}):compose;
const sagaMiddleware = createSagaMiddleware();
const configureStore = () =>{
  const middlewares=[sagaMiddleware];
  const enhancer=[applyMiddleware(...middlewares)];
  const store = createStore(rootReduccers,composeEhancer(...enhancer));
  sagaMiddleware.run(rootSaga)

  return store;

  
  
}
export default configureStore;