import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import './App.css';

import Translation from './Translation';

const rootReducer = combineReducers({
    form: formReducer
});

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <Translation />
    </Provider>
);

render(<App />, document.getElementById('root'));
