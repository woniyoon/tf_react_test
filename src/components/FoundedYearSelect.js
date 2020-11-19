import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const generateYears = () => {
    let yearArr = [];

    for(let i=2000; i<=2020; i++) {
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
                inputProps={{ 'aria-label': 'Without label' }}
                label="설립일을 선택하세요."
                onChange={props.onChange}
            >
                {generateYears()}
                {/* <MenuItem value={1}>Korean Won</MenuItem>
                <MenuItem value={2}>US Dollar</MenuItem> */}
            </Select>
        </FormControl>
    );
}

export default FoundedYearSelect;