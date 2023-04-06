


const Initial_state={
    firstName:'Fatma',
    lastName:'Mahmoud',
    birthDate:'1997/11/18'

}






export default function  updateInformationReducer(state=Initial_state,action){


    switch(action.type){
        case 'UPDATE_INFORMATION':
            return { ...state, firstName: action.payload.fname ,lastName: action.payload.lname}
            default:
                return state
    }



}