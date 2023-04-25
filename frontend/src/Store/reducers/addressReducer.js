
const Initial_state = {
    Fname: '',
    Lname: '',
    phoneNumber: '',
    street: '',
    city: '',
    country: '',
    zip: ''

}


export default function editAddressReducer(state = Initial_state, action) {


    switch (action.type) {
        case 'EDIT_ADDRESS':
            return {
                ...state, Fname: action.payload.fname, Lname: action.payload.lname,
                phoneNumber: action.payload.phone, street: action.payload.street, city: action.payload.city, country: action.payload.country, zip: action.payload.zip
            };
        default:
            return state
    }



}