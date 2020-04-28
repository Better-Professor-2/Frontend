import axios from 'axios'

export const postSignUp = (newUser) => dispatch =>{
    dispatch({type: 'SIGNUP_START'})
    axios
    .put('https://better-professor-karavil.herokuapp.com/auth/register', newUser)
    .then(res => {
        console.log(res)
        dispatch({type: 'SIGNUP_SUCCESS', payload: res})
    })
    .catch(err => {
        console.log("couldn't add user", err)
        dispatch({
            type: 'SIGNUP_FAILURE',
            payload: err
        })
    })
}