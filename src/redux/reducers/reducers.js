const initialState = {
    movie: []
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GET_MOVIES':
            return { ...state, movie: payload };
        default:
            return state;
    }
}

export const favMovieReducer = (state = [], {type, payload}) => {
    switch (type) {
        case 'ADD_FAV_MOVIES':
            localStorage.setItem('favMovie', JSON.stringify([ ...state, {...payload} ]))
            return [ ...state, {...payload} ];
        case 'REMOVE_FAV_MOVIES':
            localStorage.setItem('favMovie', JSON.stringify([ ...state.filter(el => el.imdbID !== payload.imdbID )]))
            return [ ...state.filter(el => el.imdbID !== payload.imdbID )];
        default:
            return state;
    }
}