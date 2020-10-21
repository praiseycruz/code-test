import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import reducers from '../reducers'; //Import the reducer

const loggerMiddleware = createLogger();


export const store = (process.env.REACT_APP_STAGE === 'development') ? createStore(
	// reducers,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
) : createStore(
	// reducers,
	applyMiddleware(
		thunkMiddleware
	)
);
