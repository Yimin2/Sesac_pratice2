import React, {useState} from 'react';

function Form(props) {


    const level = [{id: 1, value: "신입"}, {id: 2, value: "주니어"}, {id: 3, value: "시니어"},];

    const [selectedLevel, setSelectedLevel] = useState("")
    const [form, setFrom] = useState({
        email: "", password: "", passwordConfirm: "",
    })

    function validateForm(form) {
        if (!form.email) {
            alert("이메일을 입력하세요");
            return false;
        }
        if (form.password.length < 6) {
            alert("비밀번호는 8자리 이상이어야 합니다");
            return false;
        }
        if (form.password !== form.passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다");
            return false;
        }
        return true;
    }


    function handleClick(e) {
        if(!validateForm(form)) {
            e.preventDefault()
        }
    }

    function handleChange(e) {
        const {name, value} = e.target
        setFrom({...form, [name]: value})
    }

    function handleRadioChange(e) {
        setSelectedLevel(e.target.value);
    }

    return (<div className="flex justify-center">
        <div className="flex flex-col w-xl ">
            <form action="">
                <div>
                    <label> 이메일
                        <input type="email"
                               name="email"
                               value={form.email}
                               className="border-2 shadow-xl m-2 w-full"
                               onChange={(e) => {
                                   handleChange(e);
                               }}/>
                    </label>
                    <label> 비밀번호
                        <input type="password"
                               name="password"
                               value={form.password}
                               className="border-2 shadow-xl m-2  w-full"
                               onChange={(e) => {
                                   handleChange(e);
                               }}/>
                    </label>
                    <label>비밀번호 확인
                        <input type="passwordConfirm"
                               name="passwordConfirm"
                               value={form.passwordConfirm}
                               className="border-2 shadow-xl m-2 w-full"
                               onChange={(e) => {
                                   handleChange(e);
                               }}/>
                    </label>
                </div>
                <div>
                    <p>레벨</p>
                    {level.map((level) => (<label key={level.id}>
                        <input
                            type="checkbox"
                            value={level.value}
                            checked={selectedLevel === level.value}
                            className="mx-2"
                            onChange={(e) => {
                                handleRadioChange(e);
                            }}
                        />
                        {level.value}
                    </label>))}
                </div>
                <div>
                    <button className="bg-blue-500 text-white w-full h-8 m-2 cursor-pointer"
                            onClick={(e) => {
                                handleClick(e)
                            }}>회원가입
                    </button>
                </div>
            </form>
        </div>
    </div>);
}

export default Form;