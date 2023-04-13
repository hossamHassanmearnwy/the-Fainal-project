const initialState = {
    fav: [],
  };
  export default function favReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_FAV":
        return { ...state, fav: [...state.fav, action.payload] };
      case "REMOVE_FAV":
        return {
          ...state,
          fav: state.fav.filter((el) => {
            return el.id !== action.payload;
          }),
        };
      default:
        return state;
    }
  }
  