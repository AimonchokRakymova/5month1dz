import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, obnulenia, ocean, vredina} from "../action/CounterAction";


function MainPage() {
    let count = useSelector(state => state)
    const dispatch = useDispatch()
    if (count < 0 ){
        dispatch(obnulenia())
    }
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(vredina())}>clear</button>
            <button onClick={()=>dispatch(ocean())}>add 10</button>
        </div>
    )
}
export default MainPage;