import axios from 'axios'

export const postSignUp = (newUser) => dispatch =>{
    dispatch({type: 'SIGNUP_START'})

    const formattedUser = {
       ...newUser,
       first_name: newUser.firstName,
       last_name: newUser.lastName
    }

    console.log(newUser)
    axios
    .post('https://better-professor-karavil.herokuapp.com/auth/register', formattedUser)
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