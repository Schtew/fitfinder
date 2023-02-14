import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './TaskBar.css';
import { color } from '@mui/system';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const TaskBar = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.root} full-width`}>
      <AppBar position="static">
        <Toolbar className='backing-color'>
          <Typography 
          variant="h6" 
          className="poppins-font"
          sx={{ letterSpacing: 3}}
          >
            Fit Finders
          </Typography>
          <a href="https://www.instagram.com/pacificprogram" target="_blank" rel="noopener noreferrer">
          <IconButton color="#FFFFFF">
            <InstagramIcon style={{ color: "#FFFFFF"}} />
          </IconButton>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TaskBar;