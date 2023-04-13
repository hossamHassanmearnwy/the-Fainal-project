import { combineReducers } from "redux";
import updateInformationReducer from './../reducers/updateInfoReducer';
import editAddressReducer from './../reducers/addressReducer';
import favReducer from './addFavReducer';

export default combineReducers({

    updateInformation: updateInformationReducer,
    editShippingAddress: editAddressReducer,
    favorites: favReducer,

})

