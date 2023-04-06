import { combineReducers } from "redux";
import updateInformationReducer from './../reducers/updateInfoReducer';
import editAddressReducer from './../reducers/addressReducer';

export default combineReducers({

    updateInformation: updateInformationReducer,
    editShippingAddress: editAddressReducer
})

