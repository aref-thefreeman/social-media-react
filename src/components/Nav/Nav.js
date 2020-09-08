import React from 'react';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(0),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));


const Nav = () => {


            const classes = useStyles();
            const [value, setValue] = React.useState(0);
            const handleChange = (event, newValue) => {
                setValue(newValue);
            };
    return (
        <div>
                <div className={classes.demo1}>
                    <Typography className={classes.padding} />
                </div>
                <div className={classes.demo2}>
                    <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                    <Link to = {'/newsfeed'}><StyledTab label="Newsfeed" /></Link>
                    
                    <Link to = {'/profile'}><StyledTab label="Profile" /></Link>
                    
                    <Link to = {'/connections'}><StyledTab label="Connections" />
                    </Link>
                    </StyledTabs>
                    <Typography className={classes.padding} />
                </div>
        </div>
    );
};

export default Nav;