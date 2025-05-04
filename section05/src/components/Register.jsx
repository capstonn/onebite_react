import {useState, useRef} from 'react';


//간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {

    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    let count = 0;

    const onSubmit= () => {
        if(input.name === "") {
            // 이름을 입력하는 dom 요소 포커스
            inputRef.current.focus();
        }
    }

    
    const onChange = (e) => {
        // countRef.current++;
        count ++;
        console.log(count);
        setInput ({
            ...input,
            [e.target.name] : e.target.value,

        })
    }
    

    return (
    <div>

        <div>
        <input 
        ref = {inputRef}
        name = "name"
        value = {input.name}
        onChange={onChange}
        placeholder = {"이름"}
        />
        </div>

        <div>
        <input 
        value = "birth"
        onChange = {onChange}
        type = "date"
        />
    </div>


    <div>
        <select value = "country" onChange = {onChange}> 
            <option value = ""></option>
            <option value = "kr">한국</option>
            <option value = "us">미국</option>
            <option value = "uk">영국</option>
        </select>
    </div>  

    <div>
        <textarea name = "bio" 
        value = {input.bio} 
        onChange={onChange} />

    </div>
    

    <button onClick = {onSubmit}>제출</button>
    </div>

    ); //name state 값을 랜더링하도록 함
}; // 초기값 + value 속성

export default Register;