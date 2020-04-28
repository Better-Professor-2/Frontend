import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postSignUp } from '../actions/signUpAction'

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

            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={props.firstName}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="Last Name">
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={props.lastName}
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={props.email}
                        onChange={handleChanges}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={props.password}
                        onChange={handleChanges}
                    />
                </label>

                <button>Sign Up</button>
            </form>
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