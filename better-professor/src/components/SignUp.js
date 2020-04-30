 import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as yup from 'yup';
import { postSignUp } from '../actions/signUpAction'
import { Signup, SignupForm, Div } from './styledComponents/signupContainer';
import bg from './background.png';



const initFormValue = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',


}
const initFormErrors = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',

}
const formSchema = yup.object().shape({
    firstName: yup
    .string()
    .required('First name field is required')
    .min(2),
    lastName: yup
    .string()
    .required('Last name field is required')
    .min(2),
    email: yup
    .string()
    .email('Enter a valid email')
    .required('Email field is required'),
    password: yup
    .string()
    .required('Password field is required')
})
const SignUp = props => {
    const [formValue, setFormValue] = useState(initFormValue)
    const [formErrors, setFormErrors] = useState(initFormErrors)
    const [isDisabled, setIsDisabled] = useState(true)
    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    useEffect(()=>{
        formSchema.isValid(formValue)
         .then(valid=>{
             setIsDisabled(!valid)
         })
    },[formValue])

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
        console.log(formValue)
        props.postSignUp(formValue);

        setFormValue({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })
    }

    return (
        <Div style={{backgroundImage:`url(${bg})`}}>
    <Signup>

        <h1 style={{textAlign:'center'}}>Welcome to Better Professor</h1>
        <p style={{marginTop:'0px',textAlign:'center'}}>A better way to mentor</p>
        <h3 style={{textAlign:'center'}}>Sign Up</h3>
        <p style={{ color:'red', marginTop:'0px',textAlign:'center'}}>{formErrors.firstName}</p>
        <p style={{ color:'red', marginTop:'0px',textAlign:'center'}}>{formErrors.lastName}</p>
        <p style={{ color:'red', marginTop:'0px',textAlign:'center'}}>{formErrors.email}</p>
        <p style={{ color:'red', marginTop:'0px',textAlign:'center'}}>{formErrors.password}</p>
        <SignupForm onSubmit={handleSubmit}>
            <div>
            <label htmlFor="first-name">
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={formValue.firstName}
                    onChange={handleChanges}
                />
            </label>

            <label htmlFor="Last Name">
                Last Name:
                <input
                    style={{
                        marginTop:'3%'
                    }}
                    type="text"
                    name="lastName"
                    value={formValue.lastName}
                    onChange={handleChanges}
                />
            </label>
            </div>

            <label htmlFor="email">
                Email:
                <input
                    style={{
                        marginTop:'3%'
                    }}
                    type="email"
                    name="email"
                    value={formValue.email}
                    onChange={handleChanges}
                />
            </label>

            <label>
                Password:
                <input
                    style={{
                        marginTop:'3%'
                    }}
                    type="password"
                    name="password"
                    value={formValue.password}
                    onChange={handleChanges}
                />
            </label>

            <button disabled={isDisabled} onClick={handleSubmit} style={{width:'25%', margin:'5% auto'}}>Sign Up</button>
        <img alt='icon pointing to input fields' src={require('./teacher.png')} style={{
            width:'25%', 
            transform: 'scaleX(-1)',
            position:'absolute',
            right:'10%',
            bottom:'-40%',

            
            }}/>
        </SignupForm>
    </Signup>
    </Div>

    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
        firstName: state.signUpReducer.firstName,
        lastName: state.signUpReducer.lastName,
        email: state.signUpReducer.email,
        password: state.signUpReducer.password
    }
}

export default connect(
    mapStateToProps,
    { postSignUp }
)(SignUp);