
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Login/LoginForm"
import AuthContext from "../store/auth-context";


const Login = ()=>{
    const authCtx=useContext(AuthContext);
    const navigate=useNavigate();
    if(authCtx.isLoggedIn){
        navigate('/store');
    }
    return(<div>
        <LoginForm/>
    </div>)
}

export default Login;