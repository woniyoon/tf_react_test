import React from "react";
import { useState } from "react";
import "./registerForm.css";
import { FormControl, RadioGroup, Select, MenuItem, InputLabel } from "@material-ui/core/";
import CustomButton from "./CustomButton";
import FoundedYearSelect from "./FoundedYearSelect";
import TextInputSection from "./TextInputSection";
import RadioButton from "./RadioButton";
import { withTranslation } from "react-i18next";

const RegisterForm = ({t, i18n}) => {
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

    // 라디오버튼 클릭 이벤트
    const handleMemberTypeChange = (event) => {
        const { value } = event.target; 

        setMemberType(value);
        
        // 라디오버튼의 라벨을 bold 처리하기 위해 boolean값 전달
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

    // TextInput값을 state에 저장
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

    // 화폐단위를 state에 저장
    const selectCurrency = (event) => {
        setCurrency(event.target.value);
    }

    // 설립연도를 state에 저장
    const selectFoundedYear = (event) => {
        setFoundedYear(event.target.value);
    } 

    // 다음 버튼 클릭 이벤트
    const handleNextButtonClicked = () => {

        if(email.trim() !== "" && password.trim() !== "" && companyName.trim() !== "") {
            console.log("next button clicked!");
        } else {
            alert(t("emptyAlert"));
        }

    }


    return (
        <div className="registerPage">
            <form className="registerForm">
                <p className="formTitle">{t("formTitle")}</p>
                <p className="formDetail">{t("formDetail")}</p>
                <FormControl component="fieldset" >
                    <RadioGroup 
                        row 
                        className="memberType" 
                        name="memberType" 
                        value={memberType} 
                        onChange={handleMemberTypeChange} 
                    >
                        <RadioButton type="company" value={t("company")} isSelected={selectedRadio.companySelected}/>
                        <RadioButton type="client" value={t("client")} isSelected={selectedRadio.clientSelected}/>
                        <RadioButton type="individual" value={t("individual")} isSelected={selectedRadio.individualSelected} />
                    </RadioGroup>
                </FormControl>
                <TextInputSection onChange={handleTextInput} t={t} />
                
                <section className="selectInputSection">
                    <FormControl 
                        className="currencySelect" 
                        variant="outlined" 
                        >
                        <InputLabel>{t("inputs.currency")}</InputLabel>
                        <Select
                            className="inputSelect"
                            displayEmpty
                            label={t("inputs.currency")}
                            defaultValue="krw"
                            onChange={selectCurrency} 
                        >
                            <MenuItem value="krw">{t("krw")}</MenuItem>
                            <MenuItem value="usd">{t("usd")}</MenuItem>
                        </Select>
                    </FormControl>
                    <div className="mandatoryField">{t("errors.mandatory")}</div>
                    <FoundedYearSelect onChange={selectFoundedYear} t={t}/>
                    <div className="mandatoryField">{t("errors.mandatory")}</div>
                </section>

                <section className="buttonSection">
                    <CustomButton className="nextButton" onClick={handleNextButtonClicked}>{t("buttons.next")}</CustomButton>
                    <a className="loginLink">{t("buttons.login")}</a>
                </section>

            </form>
            <Select
                className="languageSelect"
                displayEmpty
                defaultValue="kor"
            >
                <MenuItem value="kor" onClick={()=>{ i18n.changeLanguage("ko-KR")}}>한국어</MenuItem>
                <MenuItem value="eng" onClick={()=>{ i18n.changeLanguage("en-US")}}>English</MenuItem>
            </Select>
        </div>
    );

}


export default withTranslation()(RegisterForm);
