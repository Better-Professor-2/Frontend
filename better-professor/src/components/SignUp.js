 import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postSignUp } from '../actions/signUpAction'
import { Signup, SignupForm } from './styledComponents/signupContainer';


const SignUp = props => {

    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChanges = e => {
        setSignUp({...signUp, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(signUp)
        props.postSignUp(signUp);

        setSignUp({
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        })
    }

    return (
            <div>
            <h1>Welcome to Better Professor</h1>
            <p>A better way to mentor</p>
        <Signup>

            <h3>Sign Up</h3>
            <SignupForm onSubmit={handleSubmit}>
                <label htmlFor="first-name">
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={signUp.firstName}
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
                        value={signUp.lastName}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        style={{
                            marginTop:'3%'
                        }}
                        type="email"
                        name="email"
                        value={signUp.email}
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
                        value={signUp.password}
                        onChange={handleChanges}
                    />
                </label>

                <button style={{width:'25%', margin:'5% auto'}}>Sign Up</button>
            </SignupForm>
        </Signup>
        </div>

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