import { legacy_createStore as createStore } from 'redux';
import combineReducers from './reducers/combine'
import updateInformationReducer from './reducers/updateInfoReducer'
import editAddressReducer from './reducers/addressReducer'
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(combineReducers,composeWithDevTools());
// const store = createStore(updateInformationReducer);
// const store = createStore(editAddressReducer);


export default store




