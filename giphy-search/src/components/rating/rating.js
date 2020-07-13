
import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import RatingCss from './rating.css'

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
    }
})
export default function Ratings(props){
    const classes = useStyles()
    const [rating,setRating] = useState('pg')
    return (
      <React.Fragment>
        <Paper className={classes.paper}>
            <List>
            {buttons.map( (ratingObject) => {
                return(
                <ListItem
                    onClick = {() => setRating()}
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
