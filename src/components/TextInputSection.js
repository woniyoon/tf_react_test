import React, { useState } from "react";
import { TextField } from "@material-ui/core";

// 유효성 검사를 위한 이메일&패스워드 정규표현식
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const TextInputSection = (props) => {
    const [isEmailValid, setEmailValid] = useState(true);
    const [isPasswordValid, setPasswordValid] = useState(true);
    const [isFilledOut, setFilledOut] = useState(true);

    const { onChange, t } = props;
    
    // 이메일 유효성 검사
    const validateEmail = (event) => {
        const email = event.target.value;
        const isValid = emailRegex.test(String(email).toLowerCase());
        
        setEmailValid(isValid);

        if(isValid) {
            onChange(event);
        }
        
    }
    
    // 패스워드 유효성 검사
    const validatePassword = (event) => {
        const password = event.target.value;
        const isValid = passwordRegex.test(String(password));
        
        setPasswordValid(isValid);
    
        if(isValid) {
            onChange(event);
        }
    }

    // 회사명 유효성 검사
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
            <div className="inputsTitle">{t("inputs.title")}</div>
            <TextField 
                className="inputText" 
                id="email"
                label={t("inputs.email")} 
                variant="outlined" 
                type="email"
                autoComplete="email"
                error={!isEmailValid}
                onBlur={e => validateEmail(e)}
                />
            <div className="invalidInputWarning">{ isEmailValid ? null : t("errors.email") } </div>
            <TextField 
                className="inputText" 
                id="password"
                label={t("inputs.password")}
                variant="outlined" 
                type="password"
                autoComplete="password"
                error={!isPasswordValid}
                onBlur={e => validatePassword(e)}
                />
            <div className="invalidInputWarning">{ isPasswordValid ? null : t("errors.password") } </div>
            <TextField 
                className="inputText" 
                id="companyName"
                label={t("inputs.company")} 
                variant="outlined" 
                onBlur={e => checkName(e)}
            />
            <div className="invalidInputWarning">{ isFilledOut ? null : t("errors.company") } </div>
        </section>
    );
}

export default TextInputSection;