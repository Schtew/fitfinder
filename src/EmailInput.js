import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));

const EmailInput = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form noValidate autoComplete="off">
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
        />
      </form>
    </div>
  );
};

export default EmailInput;