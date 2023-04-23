const Initial_state = {
    Fav: [] 
}

export default function changeFav(state = Initial_state, action) {

    switch (action.type) {
        case 'SET_ADD':
            return { ...state, Fav: [ ...state.Fav , ...action.payload] }
        case 'SET_REMOVE':
            return { ...state, Fav: action.payload }
        default:
            return state
    }

}