import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios'
// import Cards from './StudentCards'
// import { connect } from 'react-redux'
// import { postLogin } from '../actions/loginActions'


const Login = props =>{
    
    const emailPlacehlder = 'Email'
    const pwPlacehlder = 'Password'
    const {register, errors} = useForm()
    
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChanges = e => {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("handle submit here")
        axios
        .post("https://better-professor-karavil.herokuapp.com/auth/login", login)
        .then(res=> {
            console.log("login post req res", res)
            localStorage.setItem("token", res.data.token)
            props.history.push("/protected")
        })
        .catch(err => {
            console.log("there was an error logging in ", err.response.data )
        })
    }
    console.log(login)
    return(
    <div>
        <h1>Better Professor</h1>
        <h2>Login</h2>
        <form style={{display:'flex', flexDirection:'column'}} onSubmit={handleSubmit}>
            <label> Email:<span style={{color:'red'}}>*</span> &nbsp;
                <input
                    name='email'
                    ref={register({required: 'Email field is required', pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    }})}
                    placeholder={emailPlacehlder}
                    // react 2
                    type="email"
                    onChange={handleChanges}
                    value={login.email}
                    />
                    
                
            </label>

            <label> Password:<span style={{color:'red'}}>*</span> &nbsp;
                <input
                    name='password'
                    ref={register({
                        required:'Password field is required'})}
                    placeholder={pwPlacehlder}
                    //react 2
                    type="password"
                    onChange={handleChanges}
                    value={login.password}
                    />
                
            </label>&nbsp;
            <input type='submit' />
            {errors.email && <p>Email or Password is invalid</p>}


        </form>
            
    </div>
    )

}
// const mapStateToProps = state => {
//     console.log("from login props", state)
//     return {
//         email: state.loginReducer.email || "",
//         password: state.loginReducer.password || ""
//     }
// }
// export default connect(
//     mapStateToProps,
//     { postLogin }
// )(Login);
export default Login;