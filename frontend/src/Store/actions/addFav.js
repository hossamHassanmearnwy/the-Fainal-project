export function addFavorirts(data) {
    return {
      type: "ADD_FAV",
      payload: data,
    };
  }
  export function removeFavorirts(data) {
    return {
      type: "REMOVE_FAV",
      payload: data,
    };
  }
  