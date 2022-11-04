export const getMovie = (movies) => {
    return {
      type: 'GET_MOVIES',
      payload: movies,
    };
};

export const updateMovie = (movies) => {
    return {
      type: 'UPDATE_MOVIES',
      payload: movies,
    };
};
  
export const addFavMovie = (movie) => {
    return {
      type: 'ADD_FAV_MOVIES',
      payload: movie,
    };
};

export const removeFavMovie = (movie) => {
    return {
        type: 'REMOVE_FAV_MOVIES',
        payload: movie
    };
};