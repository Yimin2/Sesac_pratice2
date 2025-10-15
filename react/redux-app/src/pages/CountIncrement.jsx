import {useDispatch, useSelector} from "react-redux";
import {increment} from "../store/counterSlice.js";

export default function CountIncrement() {
    const step = useSelector((state) => state.counter.step);
    const dispatch = useDispatch();

    function handleIncrement() {
        dispatch(increment())
    }
    return (
        <div>
            <button
                className="border-2 p-2 cursor-pointer"
                onClick={() => handleIncrement()}
            >
                전역 상태 count 증가
            </button>
            <div>현재 단위: {step}</div>
        </div>
    );
}
