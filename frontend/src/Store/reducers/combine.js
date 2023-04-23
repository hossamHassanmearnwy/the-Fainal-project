import { combineReducers } from "redux";
import updateInformationReducer from './../reducers/updateInfoReducer';
import editAddressReducer from './../reducers/addressReducer';
import addFav from './add';
import myReducer from "./search";

export default combineReducers({
    add:addFav,
    search:myReducer,
    updateInformation: updateInformationReducer,
    editShippingAddress: editAddressReducer
})

