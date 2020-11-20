import React from "react";
import { useState } from "react";
import "./registerForm.css";
import { FormControl, RadioGroup, FormControlLabel, Select, MenuItem, InputLabel } from "@material-ui/core/";
import CustomRadio from "./CustomRadio";
import CustomButton from "./CustomButton";
import FoundedYearSelect from "./FoundedYearSelect";
import TextInputSection from "./TextInputSection";
import RadioButton from "./RadioButton";

const RegisterForm = () => {
    const [memberType, setMemberType] = useState("company");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [currency, setCurrency] = useState("krw");
    const [foundedYear, setFoundedYear] = useState(2020);
    const [selectedRadio, setSelectedRadio] = useState({
        companySelected: true,
        clientSelected: false,
        individualSelected: false,
    });


    const handleMemberTypeChange = (event) => {
        const { value } = event.target; 

        setMemberType(value);
        
        switch (value) {
            case "company":
                setSelectedRadio({
                    companySelected: true,
                    clientSelected: false,
                    individualSelected: false,
                });
                break;

                case "client":
                setSelectedRadio({
                    companySelected: false,
                    clientSelected: true,
                    individualSelected: false,
                });
                break;

            case "individual":
                setSelectedRadio({
                    companySelected: false,
                    clientSelected: false,
                    individualSelected: true,
                });
                break;
        }
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

    const selectCurrency = (event) => {
        setCurrency(event.target.value);
    }

    const selectFoundedYear = (event) => {
        setFoundedYear(event.target.value);
    } 

    const handleNextButtonClicked = () => {

        if(email.trim() !== "" && password.trim() !== "" && companyName.trim() !== "") {
            console.log("next button clicked!");
        } else {
            alert("모두 기입해주세요.");
        }

    }


    return (
        <div className="registerPage">
            <form className="registerForm">
                <p className="formTitle">Gconstudio 계정 만들기</p>
                <p className="formDescription">하나의 계정으로 모든 지콘스튜디오 서비스를 이용할 수 있습니다.</p>
                <FormControl component="fieldset" >
                    <RadioGroup row className="memberType" name="memberType" value={memberType} onChange={handleMemberTypeChange} >
                        <RadioButton type="company" value="번역회사" isSelected={selectedRadio.companySelected}/>
                        <RadioButton type="client" value="의뢰인" isSelected={selectedRadio.clientSelected}/>
                        <RadioButton type="individual" value="번역가" isSelected={selectedRadio.individualSelected} />
                    </RadioGroup>
                </FormControl>
                <TextInputSection onChange={handleTextInput} />
                <section className="selectInputSection">
                    <FormControl 
                        className="currencySelect" 
                        variant="outlined" 
                        >
                        <InputLabel>화폐단위를 선택하세요.</InputLabel>
                        <Select
                            className="inputSelect"
                            displayEmpty
                            label="화폐단위를 선택하세요."
                            defaultValue="krw"
                            onChange={selectCurrency} 
                        >
                            <MenuItem value="krw">대한민국 원(₩)</MenuItem>
                            <MenuItem value="usd">미국 달러($)</MenuItem>
                        </Select>
                    </FormControl>
                    <FoundedYearSelect onChange={selectFoundedYear}/>
                </section>
                <section className="buttonSection">
                    <CustomButton className="nextButton" onClick={handleNextButtonClicked}>다음</CustomButton>
                    <a className="loginLink">로그인</a>
                </section>
            </form>
            <Select
                className="languageSelect"
                displayEmpty
                defaultValue="kor"
            >
                <MenuItem value="kor">한국어</MenuItem>
                <MenuItem value="eng">영어</MenuItem>
            </Select>
        </div>
    );

}


export default RegisterForm;