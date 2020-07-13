const initialState = {
    rating:'pg'
}

export default function(state = initialState,action){
    switch(action.type){
        case 'SET_RATING':
            return{
                ...state,
                rating:action.payload
            }
        default:
            return state
        }
    }