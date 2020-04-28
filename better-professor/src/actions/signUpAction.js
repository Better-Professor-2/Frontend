import axios from 'axios'

export const postSignUp = (newUser) => dispatch =>{
    dispatch({type: 'SIGNUP_START'})

    const formattedUser = {
       first_name: newUser.firstName,
       last_name: newUser.lastName,
       email: newUser.email,
       password: newUser.password,
    }

    console.log(newUser)
    axios
    .post('https://better-professor-karavil.herokuapp.com/auth/register', formattedUser)
    .then(res => {
        console.log(res.data)
        dispatch({type: 'SIGNUP_SUCCESS', payload: res.data})
    })
    .catch(err => {
        console.log("couldn't add user", err.response.data)
        dispatch({
            type: 'SIGNUP_FAILURE',
            payload: err
        })
    })
}