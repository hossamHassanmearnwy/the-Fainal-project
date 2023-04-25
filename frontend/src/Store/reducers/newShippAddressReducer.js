const Initial_state = {
    newFname: '',
    newLname: '',
    newPhone: '',
    newStreet: '',
    newCity: '',
    newCountry: '',
    newZip: ''

}


export default function editNewShipAddressReducer(state = Initial_state, action) {


    switch (action.type) {
        case 'EDIT_NEW_ADDRESS':
            return {
                ...state, newFname: action.payload.newFname, newLname: action.payload.newLname,
                newPhone: action.payload.newPhone, newStreet: action.payload.newStreet, newCity: action.payload.newCity,
                newCountry: action.payload.newCountry, newZip: action.payload.newZip
            };
        default:
            return state
    }



}