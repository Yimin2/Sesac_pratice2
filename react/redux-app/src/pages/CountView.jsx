import {useSelector} from "react-redux";
export default function CountView() {

    const count = useSelector((state) => state.counter.count);
    return (
        <div>
            <div>전역 상태 count: {count}</div>
        </div>
    );
}
