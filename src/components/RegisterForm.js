import React from "react";
import { useState } from "react";
import "./registerForm.css";
import { FormControl, RadioGroup, FormControlLabel, Select, MenuItem, InputLabel } from "@material-ui/core/";
import CustomRadio from "./CustomRadio";
import CustomButton from "./CustomButton";
import FoundedYearSelect from "./FoundedYearSelect";
import TextInputSection from "./TextInputSection";

const RegisterForm = () => {
    const [memberType, setMemberType] = useState("company");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [foundedYear, setFoundedYear] = useState(2020);

    const handleMemberTypeChange = (event) => {
        setMemberType(event.target.value);
    }

    const handleTextInput = (event) => {
        const { value, id } = event.target;

        switch (id) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "companyName":
                setCompanyName(value);
                break;
        }
    }

    const selectFoundedYear = (event) => {
        setFoundedYear(event.target.value);
    } 

    const printResult = () => {
        console.log(email);
        console.log(password);
        console.log(companyName);
    }


    return (
        <div className="registerPage">
            <form className="registerForm">
                <p className="formTitle">Gconstudio 계정 만들기</p>
                <p className="formDescription">하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.</p>
                
                <FormControl component="fieldset" >
                    <RadioGroup row className="memberType" name="memberType" value={memberType} onChange={handleMemberTypeChange} >
                        <FormControlLabel 
                            value="company" 
                            control={<CustomRadio id="company" /> } 
                        />
                        <label htmlFor="company" className="typeOption">번역회사</label>
                        <FormControlLabel 
                            value="client" 
                            control={<CustomRadio id="client" />} 
                        />
                        <label htmlFor="client" className="typeOption">의뢰인</label>
                        <FormControlLabel 
                            value="individual" 
                            control={<CustomRadio id="individual" />} 
                        />
                        <label htmlFor="individual" className="typeOption">번역가</label>
                    </RadioGroup>
                </FormControl>
                <TextInputSection onChange={handleTextInput} />
                <section className="selectInputSection">
                    <FormControl variant="outlined" >
                        <InputLabel>화폐단위를 선택하세요.</InputLabel>
                        <Select
                            className="inputSelect"
                            displayEmpty
                            label="화폐단위를 선택하세요."
                            defaultValue="krw"
                        >
                            <MenuItem value="krw">대한민국 원(₩)</MenuItem>
                            <MenuItem value="usd">미국 달러($)</MenuItem>
                        </Select>
                    </FormControl>
                    <p className="inputDescription">필수 입력사항입니다.</p>
                
                    <FoundedYearSelect onChange={selectFoundedYear}/>
                    <p className="inputDescription">필수 입력사항입니다.</p>
                </section>
                <section>
                    <CustomButton className="nextBtn" onClick={printResult}>다음</CustomButton>
                    <a className="loginLink">로그인</a>
                </section>
            </form>
            <Select
                className="languageSelect"
                displayEmpty
                // inputProps={{ 'aria-label': 'Without label' }}
                defaultValue="kor"
            >
                <MenuItem value="kor">한국어</MenuItem>
                <MenuItem value="eng">영어</MenuItem>
            </Select>
        </div>
    );

}


export default RegisterForm;