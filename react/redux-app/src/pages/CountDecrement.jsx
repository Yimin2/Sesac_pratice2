// 전역 상태 count 감소 로직을 위한 코드
// ...

import {useDispatch, useSelector} from "react-redux";
import {decrement} from "../store/counterSlice.js";

export default function CountDecrement() {
    // 전역 상태 count 감소 로직을 위한 코드
    // ...
    const step = useSelector((state) => state.counter.step);
    const dispatch = useDispatch()
    function handleDecrement() {
        dispatch(decrement())
    }
    return (
        <div>
            <button
                className="border-2 p-2 cursor-pointer"
                onClick={() => handleDecrement()}
            >
                전역 상태 count 감소
            </button>
            <div>현재 단위: {step}</div>
        </div>
    );
}
