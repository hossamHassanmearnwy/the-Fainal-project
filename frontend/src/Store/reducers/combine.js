import { combineReducers } from "redux";
import updateInformationReducer from './../reducers/updateInfoReducer';
import editAddressReducer from './../reducers/addressReducer';
import editNewShipAddressReducer from "./../reducers/newShippAddressReducer";
import addFav from './add';
import myReducer from "./search";

export default combineReducers({
    add:addFav,
    search:myReducer,
    updateInformation: updateInformationReducer,
    editNewAddress : editNewShipAddressReducer,
    editShippingAddress: editAddressReducer,
})

