import React , { useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { Typography, Button } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { getGiphies } from '../../api/giphy'
import Images from '../GiphyResults/Images'
import ClipLoader from "react-spinners/ClipLoader";
import {connect} from 'react-redux'
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
//make sure enter key up triggers call to api even without clicking button
function Search({rating}) {
  const classes = useStyles();
  const [currentText, setCurrentText] = useState('')
  const [loading,setLoading] = useState(false)
  const [giphies,setGiphies] = useState([])
  const callApi = async () => {
    setLoading(true) 
    getGiphies(currentText,rating)
     .then((res) => {
      const data = res.data['data']
      setGiphies(data)
      setLoading(false)
      // console.log(data[0].images.downsized_medium.url)
    }).catch((err) =>{
        setLoading(false)
        return err
    })
  }
  return (
    <React.Fragment>
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
      <ClipLoader
          size={150}
          color={"#123abc"}
          loading={loading}
        />
      <Images imageUrls={giphies} />
    </React.Fragment>
    
  );
}

const mapStateToProps = (state) => ({
  rating:state.rating
})

export default connect(
  mapStateToProps,
  null
)(Search);