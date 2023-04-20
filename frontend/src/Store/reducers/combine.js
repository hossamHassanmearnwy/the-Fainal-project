import { combineReducers } from "redux";
import updateInformationReducer from './../reducers/updateInfoReducer';
import editAddressReducer from './../reducers/addressReducer';
import addFav from './add';

export default combineReducers({
    add:addFav,
    updateInformation: updateInformationReducer,
    editShippingAddress: editAddressReducer
})

