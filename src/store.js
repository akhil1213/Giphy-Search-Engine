import { createStore,applyMiddleware,combineReducers } from 'redux';
import giphyReducer from './redux/reducers/reducer'

import thunk from 'redux-thunk';
const middleware = [thunk];

const store = createStore(giphyReducer,applyMiddleware(...middleware)
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(dealsReducer,
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store