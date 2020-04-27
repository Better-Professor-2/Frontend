import React, { useState } from 'react'

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
                        value=""
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="Last Name">
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value=""
                        onChange={handleChanges}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value=""
                        onChange={handleChanges}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value=""
                        onChange={handleChanges}
                    />
                </label>

                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;