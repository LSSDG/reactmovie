import  {useRef} from 'react';

const ProductItemForm = props =>{
    const inputRef = useRef();
    const submitHandler = e =>{
        e.preventDefault();
        const number =  inputRef.current.value;
        console.log('ref'+ number);
        props.addCart(+number)
    }
    return(<form onSubmit={submitHandler}>
        <input id={props.id} type="number" ref={inputRef}></input>
        <button type="submit">ADD</button>
    </form>)
}
export default ProductItemForm;