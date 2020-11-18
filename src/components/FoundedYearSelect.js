import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const FoundedYearSelect = (props) => {

    console.log(props);


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
                <MenuItem value={1}>Korean Won</MenuItem>
                <MenuItem value={2}>US Dollar</MenuItem>
            </Select>
        </FormControl>
    );
}

export default FoundedYearSelect;