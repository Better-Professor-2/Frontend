import styled from 'styled-components';

export const Signup = styled.div`
    width:45%;
    /* border:1px solid black; */
    /* display:flex; */
    /* flex-direction:column; */
    /* text-align:left; */
    /* padding:2%; */
    /* height:35vh; */
    margin:0 auto;
    border-radius:5px;
    box-shadow: 2px 2px 5px 4px #000;
    /* margin-top:10%; */

    background-color:white;
`;
export const SignupForm = styled.form`
    display:flex;
    position:relative;
    flex-direction:column;
    input[type=text],input[type=email],input[type=password] {
    border: none;
    border-bottom: 1px solid darkgray;
    width:30%;
        &:focus{
            outline:none;
        }
    }
`;
export const Par = styled.p`
    position:relative;
    color:red;
    font-weight:bold;
    width:max-content;
    margin:0 auto;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) );
    @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
    }
    animation-name: fadeIn;
    animation-duration: 1.5s;

`;
export const Div = styled.div`
    height:84vh;
    padding-top:8%
    
`;


