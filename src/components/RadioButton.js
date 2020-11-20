import React from "react";
import CustomRadio from "./CustomRadio";
import { FormControlLabel } from "@material-ui/core";

const RadioButton = (props) => {
    const { type, value, isSelected } = props;

    const classNames = isSelected ? "typeOption selectedRadio" : "typeOption";

    return (
        <>
            <FormControlLabel 
                value={type}
                control={<CustomRadio id={type} /> } 
            />
            <label htmlFor={type} className={classNames}>{value}</label>
        </>
    );

}


export default RadioButton;