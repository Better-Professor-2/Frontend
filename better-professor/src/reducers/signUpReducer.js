const initialState = {
    user: {},
    isLoading: false,
    error: ''
}

export const signUpReducer =(state = initialState, action) => {
    switch(action.type){
        case 'SIGNUP_START':
            return{
                ...state,
                user:{},
                isLoading: true   
            }
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case 'SIGNUP_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    default:
        return state;
    }
}