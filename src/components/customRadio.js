import { withStyles, Radio } from "@material-ui/core";

const CustomRadio = withStyles({
    root: {
        color: "#f15642",
            '&$checked': {
                color: "#f15642",
            },
    },
})((props) => <Radio color="default" {...props} />);


export default CustomRadio;