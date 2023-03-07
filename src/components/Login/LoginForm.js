import { useRef } from "react";


const LoginForm = ()=>{

    const emailRef=useRef();
    const passwordRef=useRef();
    
    const submitHandler=async (e)=>{
        e.preventDefault();
        const enteredEmail=emailRef.current.value;
    const enteredPassword=passwordRef.current.value;
        console.log("logging in");
        console.log(enteredEmail);
        console.log(enteredPassword);
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJ6JodG-H6Kz3oT9PHzoU35QIXIN1RSUE ',{
            method:'POST',
            body:JSON.stringify({
                email:enteredEmail,
                password:enteredPassword,
                returnSecureToken:true
            })
        });
        const data=res.json();
        console.log(data);
    }
    return(<form onSubmit={submitHandler}>
        <div>
            <label>Email</label>
            <input type="email" ref={emailRef}></input>
        </div>
        <div>
            <label>Password</label>
            <input type="password" ref={passwordRef}></input>
        </div>
        <button type="submit">LOGIN</button>
    </form>)
}

export default LoginForm;