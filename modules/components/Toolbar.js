import { withStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar/index';

export const styles = theme => ({
    root: {
        height: 64,
        [theme.breakpoints.up('sm')]: {
            height: 70,
        },
    },
});

export default withStyles(styles)(Toolbar);
