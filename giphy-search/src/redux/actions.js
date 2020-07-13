export const setRating= newRating => async dispatch => {
    dispatch({type:'SET_RATING', payload:newRating})
};