import React from "react";
import "./registerForm.css";
import { FormControl, RadioGroup, FormControlLabel, Radio, withStyles } from "@material-ui/core/";
import CustomRadio from "./customRadio";

const RegisterForm = () => {
    return (
        <form className="registerForm">
            <text className="formTitle">Gconstudio 계정 만들기</text>
            <p className="formDescription">하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.</p>
            
            <FormControl component="fieldset" >
                <RadioGroup row aria-label="memberType" name="memberType" >
                    <FormControlLabel 
                        value="company" 
                        control={<CustomRadio /> } 
                        label="번역회사" 
                    />
                    <FormControlLabel 
                        value="client" 
                        control={<CustomRadio />} 
                        label="의뢰인"
                    />
                    <FormControlLabel 
                        value="individual" 
                        control={<CustomRadio />} 
                        label="번역가" 
                    />
                </RadioGroup>
            </FormControl>
        </form>
    );

}


export default RegisterForm;