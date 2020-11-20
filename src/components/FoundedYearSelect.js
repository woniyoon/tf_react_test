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
    const { onChange, t } = props;

    return (
        <FormControl className="foundedYearSelect" variant="outlined" >
            <InputLabel>{t("inputs.foundedYear")}</InputLabel>
            <Select
                className="inputSelect"
                displayEmpty
                label={t("inputs.foundedYear")}
                onChange={onChange}
                defaultValue={currentYear}
            >
                {generateYears()}
            </Select>
        </FormControl>
    );
}

export default FoundedYearSelect;