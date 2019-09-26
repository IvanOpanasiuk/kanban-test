import { createStore } from 'redux';

import reduser from './reducers';

const createAppStore = () => {
    const store = createStore(
        reduser,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
}

export default createAppStore;