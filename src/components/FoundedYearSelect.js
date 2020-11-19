import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const currentYear = new Date().getFullYear();

const generateYears = () => {
    let yearArr = [];

    for(let i=1970; i<=currentYear; i++) {
        yearArr.push(
            <MenuItem key={`year${i}`} value={i}>{i}</MenuItem>
        );
    }

    return yearArr;
}

const FoundedYearSelect = (props) => {

    return (
        <FormControl variant="outlined" >
            <InputLabel>설립일을 선택하세요.</InputLabel>
            <Select
                className="inputSelect"
                displayEmpty
                label="설립일을 선택하세요."
                onChange={props.onChange}
                defaultValue={currentYear}
            >
                {generateYears()}
                {/* <MenuItem value={1}>Korean Won</MenuItem>
                <MenuItem value={2}>US Dollar</MenuItem> */}
            </Select>
        </FormControl>
    );
}

export default FoundedYearSelect;