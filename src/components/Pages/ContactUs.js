import { useRef } from "react"

const ContactUs = props  =>{
    const username = useRef();
    const email = useRef();
    const phoneNo = useRef();

    const userFormHandler = async ()=>{

        const user={
            username:username,
            email:email,
            phone:phoneNo
        }
        const res = await fetch('https://reactmovie-cb3dc-default-rtdb.firebaseio.com/users.json',{
            method:'POST',
            body:JSON.stringify(user)
        })
    }
    return(
        <form onSubmit={userFormHandler}>
            <label htmlFor='name'>Username</label>
            <input ref={username} type="text" id="name" required></input>
            <label htmlFor='phone'>Phone No</label>
            <input ref={phoneNo} type="number" id="phone" required></input>
            <label htmlFor='email'>Email</label>
            <input ref={email} type="email" id="email" required></input>
            <button type="submit">Register</button>
        </form>
    )
}

export default ContactUs;