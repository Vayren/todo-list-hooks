import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, Store } from 'redux';

import App from './components/App';
import reducer from './store/reducers';

const store: Store<Todo[], TodoAction> & {
    dispatch: DispatchType
} = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
