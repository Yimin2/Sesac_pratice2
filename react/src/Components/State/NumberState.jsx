import React, {useState} from 'react';

export default function NumberState() {
    const [num, setNum] = useState(0)

    function increment() {
        console.log("1 증가");
        setNum(num + 1)
    }

    function decrement() {
        console.log("1 감소");
        setNum(num - 1)
    }

    function multiply() {
        console.log("2배 곱하기");
        setNum(num * 2)
    }

    function reset() {
        console.log("0으로 초기화");
        setNum(0)
    }

    return (<div className="flex flex-col items-center p-6 border rounded-lg">
            <h2 className="text-2xl font-bold mb-4">숫자 상태 관리</h2>
            <p className="text-3xl font-bold mb-4">현재 값: {num}</p>
            <div className="flex gap-2 flex-wrap justify-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer"
                        onClick={() => {
                            increment()
                        }}>
                    +1
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => {
                    decrement()
                }}>>-1</button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => {
                    multiply()
                }}>>
                    ×2
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => {
                    reset()
                }}>>
                    초기화
                </button>
            </div>
        </div>);
}
