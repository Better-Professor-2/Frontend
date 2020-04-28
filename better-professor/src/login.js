import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import Cards from './StudentCards'


const emailPlacehlder = 'Email'
const pwPlacehlder = 'Password'



const Login = ()=>{
    const {register, handleSubmit, watch, errors} = useForm()
    const [formValues, setFormValues]= useState()

    const onSubmit = (data)=>{
        axios.post('https://better-professor-karavil.herokuapp.com/auth/login')
            .then(res=>{
                console.log(res.data)

            })
            .catch(err=>{
                console.log(err)
                debugger
            })
        
    };

    return(
    <div>
        <h1>Better Professor</h1>
        <h2>Login</h2>
        <form style={{display:'flex', flexDirection:'column'}} onSubmit={handleSubmit(onSubmit)}>
            <label> Email:<span style={{color:'red'}}>*</span> &nbsp;
                <input
                    name='email'
                    ref={register({required: 'Email field is required', pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    }})}
                    placeholder={emailPlacehlder}
                    
                    />
                    
                
            </label>

            <label> Password:<span style={{color:'red'}}>*</span> &nbsp;
                <input
                    name='password'
                    ref={register({
                        required:'Password field is required'})}
                    placeholder={pwPlacehlder}
                    />
                
            </label>&nbsp;
            <input type='submit' />
            {errors.email && <p>Email or Password is invalid</p>}


        </form>
            
    </div>
    )

}

export default Login;