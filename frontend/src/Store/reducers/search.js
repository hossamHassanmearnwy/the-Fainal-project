const initialState = {
    searchTerm: '',
    products: []
  };



  export default function myReducer(state = initialState, action) {
    switch (action.type) {
      case 'UPDATE_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.payload
        };
      case 'FETCH_PRODUCTS_SUCCESS':
        return {
          ...state,
          products: action.payload
        };
      default:
        return state;
    }
  }