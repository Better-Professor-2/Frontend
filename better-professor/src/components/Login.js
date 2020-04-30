import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios'
import * as yup from 'yup';
import { Signup, SignupForm, Div, Par } from './styledComponents/signupContainer';
import bg from './background.png';
// import Cards from './StudentCards'
// import { connect } from 'react-redux'
// import { postLogin } from '../actions/loginActions'

const initFormValue = {
    email:'',
    password:'',


}
const initFormErrors = {
    email:null,
    password:null,

}
const formSchema = yup.object().shape({
    email: yup
    .string()
    .email('Enter a valid email')
    .required('Email field is required'),
    password: yup
    .string()
    .required('Password field is required')
})

const Login = props =>{
    const [formValue, setFormValue] = useState(initFormValue)
    const [formErrors, setFormErrors] = useState(initFormErrors)
    const [isDisabled, setIsDisabled] = useState(true)
    const [postErr, setPostErr] = useState(null)



    useEffect(()=>{
        formSchema.isValid(formValue)
         .then(valid=>{
             setIsDisabled(!valid)
         })
    },[formValue])
    
    const emailPlacehlder = 'Email'
    const pwPlacehlder = 'Password'
    const {register, errors} = useForm()
    
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChanges = e => {
        const name = e.target.name;
        const value = e.target.value;

        yup.reach(formSchema, name).validate(value)
        .then(valid=>{
            setFormErrors({
                ...formErrors,
                [name]:''
            })
        })
        .catch(err=>{
            setFormErrors({
                ...formErrors,
                [name]:err.errors[0]
            })
        })

        setFormValue({
            ...formValue, 
            [name]:value 
        });
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log("handle submit here")
        axios
        .post("https://better-professor-karavil.herokuapp.com/auth/login", formValue)
        .then(res=> {
            console.log("login post req res", res)
            localStorage.setItem("token", res.data.token)
            props.history.push("/protected")
        })
        .catch(err => {
            console.log("there was an error logging in ", err.response.data )
            setPostErr(`Invalid email or password; Try Again.`)
        })
    }
    console.log(formValue)
    return(
    <Div style={{backgroundImage:`url(${bg})`}}>
        <Signup>
        <h1>Better Professor</h1>
        <h2>Login</h2>
        <SignupForm style={{display:'flex', flexDirection:'column'}} onSubmit={handleSubmit}>
            <label> Email:<span style={{color:'red'}}>*</span> &nbsp;
                <input
                    name='email'
                    //react 2
                    type="email"
                    onChange={handleChanges}
                    value={formValue.email}
                    />
                    
                
            </label>

            <label> Password:<span style={{color:'red'}}>*</span> &nbsp;
                <input
                    name='password'
                    //react 2
                    type="password"
                    onChange={handleChanges}
                    value={formValue.password}
                    />
                
            </label>&nbsp;
            <button style={{fontSize:'110%', width:'10rem', margin:'2% auto', borderRadius:'5px', textAlign:'center'}} disabled={isDisabled} onSubmit={handleSubmit} type='submit'>Login</button>
            {/* {errors.email && <p>Email or Password is invalid</p>} */}



        </SignupForm>
        </Signup>
            { formErrors.email ? (<Par>{formErrors.email}</Par>): null}
            { formErrors.password ? (<Par>{formErrors.password}</Par>): null}
            { postErr ? (<Par>{postErr}</Par>): null}
    </Div>
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