import React , { useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import { Typography, Button } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import { getGiphies } from '../../api/giphy'
import Images from '../GiphyResults/Images'
import ClipLoader from "react-spinners/ClipLoader";
import {connect} from 'react-redux'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  searchContainer:{
    display:'flex',
    justifyContent:'center'
  },
  searchBox: {
    padding: "10px 5px 10px 0px",
    display: "flex",
    width: '60%',
    borderColor:'#dbdbce',
    marginTop:'3%',
  },
  input: {
    marginLeft: theme.spacing(4),
    flex: 1
  },
  center:{
    textAlign:'center'
  },
  description:{
    color:'#1e88e5'
  },
  searchIcon:{
    paddingTop:'4px',
    marginLeft:'15px'
  }
}));
//make sure enter key up triggers call to api even without clicking button
function Search({rating}) {
  const classes = useStyles();
  const [currentText, setCurrentText] = useState('')
  const [loading,setLoading] = useState(false)
  const [giphies,setGiphies] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const callApi = async () => {
    setLoading(true) 
    getGiphies(currentText,rating)
     .then((res) => {
      console.log(rating)
      const data = res.data['data']
      if(data.length === 0) setErrorMsg('No results!')
      setGiphies(data)
      setLoading(false)
      // console.log(data[0].images.downsized_medium.url)
    }).catch((err) =>{
        setLoading(false)
        return err
    })
  }
  return (
    <div className = {classes.root}>
      <Typography  align = 'center' color = 'primary' variant = 'h1'>
        Giphy Search Engine
      </Typography>
      <Typography  align = 'center' className={classes.description} variant = 'h6'>
        Search for Gif's by entering a term or phrase
      </Typography>
      <div className = {classes.searchContainer}>
        <Box borderRadius={20} className={classes.searchBox} borderTop={1} borderBottom={1} borderRight={1} borderLeft={1}>
          <SearchIcon className={classes.searchIcon}/>
          <InputBase
              className={classes.input}
              placeholder="What GIPHY are you looking for?"
              onChange={e => setCurrentText(e.target.value)}
              onKeyPress={event => event.key === 'Enter' && currentText !== '' ? callApi() : null}
              fullWidth
          />
          <Button onClick = {() => callApi()} disabled={currentText===''} variant="contained" color="primary">
            Enter
          </Button>
        </Box>
      </div>
      
      <div className={classes.center}>
        <ClipLoader
          size={150}
          color={"#123abc"}
          loading={loading}
          className={classes.center}
        />
      </div>
      
      <Images imageUrls={giphies} errorMsg = {errorMsg}/>
    </div>
    
  );
}

const mapStateToProps = (state) => ({
  rating:state.rating
})

export default connect(
  mapStateToProps,
  null
)(Search);