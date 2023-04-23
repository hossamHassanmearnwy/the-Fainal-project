export default function updateSearchTerm(searchTerm) {
    return {
      type: 'UPDATE_SEARCH_TERM',
      payload: searchTerm
    };
  }
  
 export function fetchProductsSuccess(products) {
    return {
      type: 'FETCH_PRODUCTS_SUCCESS',
      payload: products
    };
  }