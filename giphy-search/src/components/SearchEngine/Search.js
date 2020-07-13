import React , { useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { Typography, Button } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import getGiphies from '../../api/giphy'

const useStyles = makeStyles(theme => ({
  root: {
    padding: "10px 5px 10px 0px",
    display: "flex",
    alignItems: "center",
    width: '80%',
    borderColor:'#eaebdd',
  },
  input: {
    marginLeft: theme.spacing(4),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  }
}));

export default function Search(props) {
  const classes = useStyles();
  const [currentText, setCurrentText] = useState('')
  const callApi = () => {
    console.log(getGiphies.getGiphies(currentText))
  }
  return (
    <Box borderRadius={16} className={classes.root} borderTop={1} borderBottom={1} borderRight={1} borderLeft={1}>
        <InputBase
            className={classes.input}
            placeholder="Search Giphy Api"
            onChange={e => setCurrentText(e.target.value)}
            fullWidth
        />
        <Button onClick = {() => callApi()} disabled={currentText===''} variant="contained" color="primary">
          Enter
        </Button>
    </Box>
        
  );
}
