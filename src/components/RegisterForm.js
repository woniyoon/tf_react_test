import React from "react";
import "./registerForm.css";
import { FormControl, RadioGroup, FormControlLabel, Radio, withStyles, TextField, Select, MenuItem, InputLabel, Button } from "@material-ui/core/";
import CustomRadio from "./customRadio";
import CustomButton from "./customButton";

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

            <p>기본정보 입력</p>
            <section className="textInputSection">
                <TextField className="inputText" label="이메일(아이디)를 입력하세요." variant="outlined" />
                <TextField className="inputText" label="비밀번호를 입력하세요." variant="outlined" />
                <TextField className="inputText" label="회사명을 입력하세요." variant="outlined" />
            </section>
            <section className="selectInputSection">
                <Select
                    className="inputSelect"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled>
                        <p>화폐단위를 선택하세요.</p>
                    </MenuItem>
                    <MenuItem value="krw">Korean Won</MenuItem>
                    <MenuItem value="usd">US Dollar</MenuItem>
                </Select>
                <Select
                    className="inputSelect"
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled>
                        <p>설립일을 선택하세요.</p>
                    </MenuItem>
                    <MenuItem value="krw">Korean Won</MenuItem>
                    <MenuItem value="usd">US Dollar</MenuItem>
                </Select>
            </section>
            <CustomButton className="nextBtn">다음</CustomButton>
        </form>
    );

}


export default RegisterForm;