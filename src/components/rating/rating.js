
import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import RatingCss from './rating.css'
import { Typography } from "@material-ui/core";

import { connect } from 'react-redux';

const buttons = [
    {text:'g',id:1},
    {text:'r',id:2},
    {text:'pg',id:3},
    {text:'pg-13',id:4}
]
    
    

const useStyles = makeStyles({
    focused:{
        backgroundColor:'gray'
    },
    paper: {
        marginTop:'4%',
        textAlign: 'center',
        whiteSpace: 'nowrap',
    },
    textcenter:{
        textAlign:'center'
    },
    description:{
        color:'#1e88e5'
    }
})
function Ratings({rating,setRating}){//getting fields out of props object which is from redux
    const classes = useStyles()
    //didn't need redux, and could've used state instead for this functionality but why not!
    // const [rating,setRating] = useState('pg')
    
    return (
      <React.Fragment>
        <Typography  className={classes.description}>
            Select Rating
        </Typography>
        <Paper variant="outlined"  className={classes.paper}>
            <List>
            {buttons.map( (ratingObject) => {
                return(
                <ListItem
                    onClick = {() => setRating(ratingObject.text)}
                    key={ratingObject.id}
                    className = {ratingObject.text === rating ? classes.focused : 'unfocused'}
                >
                    <ListItemText
                        primary={ratingObject.text}
                        className={classes.textcenter}
                    />
                </ListItem>
                )
            })}
            </List>
        </Paper>
      </React.Fragment>
    );
}

const mapStateToProps = (state) => ({
    rating:state.rating
})

const mapDispatchToProps = dispatch =>{
    return {
        setRating: (newRating) => 
        {
            dispatch({type:'SET_RATING', payload:newRating})
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Ratings);