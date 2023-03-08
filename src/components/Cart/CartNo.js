import { useContext } from "react"
//import AuthContext from "../store/auth-context"
import CartContext from "./CartContext";

const CartNo = ()=>{
    const cartCtx=useContext(CartContext);
    const no=cartCtx.items.reduce((curr,item)=>{
        return curr+item.amount
    },0)
    console.log(no);
    return(
        <div>
            <h3>{no}</h3>
        </div>
    )
}
export default CartNo;