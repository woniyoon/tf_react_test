import React, { useState } from "react";
import { TextField } from "@material-ui/core";

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const TextInputSection = (props) => {
    const [isEmailValid, setEmailValid] = useState(true);
    const [isPasswordValid, setPasswordValid] = useState(true);
    const [isFilledOut, setFilledOut] = useState(true);
    const { onChange } = props;
    
    const validateEmail = (event) => {
        const email = event.target.value;
        const isValid = emailRegex.test(String(email).toLowerCase());
        
        setEmailValid(isValid);

        if(isValid) {
            onChange(event);
        }
        
    }
    
    const validatePassword = (event) => {
        const password = event.target.value;
        const isValid = passwordRegex.test(String(password));
        
        setPasswordValid(isValid);
    
        if(isValid) {
            onChange(event);
        }
    }

    const checkName = (event) => {
        const companyName = event.target.value.trim();
        const isValid = companyName !== "" ? true : false;

        setFilledOut(isValid);

        if(isValid) {
            onChange(event);
        }
    }

    return (
        <section className="textInputSection">
            <div className="inputsTitle">기본정보 입력</div>
            <TextField 
                className="inputText" 
                id="email"
                label="이메일(아이디)를 입력하세요." 
                variant="outlined" 
                type="email"
                autoComplete="email"
                error={!isEmailValid}
                onBlur={e => validateEmail(e)}
                />
            <div className="invalidInputWarning">{ isEmailValid ? null : "이메일 양식을 확인하세요" } </div>
            <TextField 
                className="inputText" 
                id="password"
                label="비밀번호를 입력하세요." 
                variant="outlined" 
                type="password"
                autoComplete="password"
                error={!isPasswordValid}
                onBlur={e => validatePassword(e)}
                />
            <div className="invalidInputWarning">{ isPasswordValid ? null : "비밀번호는 8자리 이상, 16자리 이하이고 영문, 숫자, 특수문자가 각 1자리 이상 포함되어야 합니다" } </div>
            <TextField 
                className="inputText" 
                id="companyName"
                label="회사명을 입력하세요." 
                variant="outlined" 
                onBlur={e => checkName(e)}
            />
            <div className="invalidInputWarning">{ isFilledOut ? null : "유효한 회사명을 입력해주세요" } </div>
        </section>
    );
}

export default TextInputSection;