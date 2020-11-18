import { withStyles, Button } from "@material-ui/core";

const CustomButton = withStyles((theme) => ({
    root: {
        color: "#ffffff",
        backgroundColor: "#f15642",
        '&:hover': {
            backgroundColor: "#f15642",
        },
    },
}))(Button);

export default CustomButton;