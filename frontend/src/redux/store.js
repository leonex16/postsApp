import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import postsReducer from './reducers/postsReducer';
import keepDataLocalStorage from './middleware/keepDataLocalStorage';

const _rootReducer = combineReducers({ postsReducer });

const store = createStore(
	_rootReducer,
	// applyMiddleware(ReduxThunk, keepDataLocalStorage), // FIREFOX
	compose(
		applyMiddleware(ReduxThunk, keepDataLocalStorage),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);

export default store;
