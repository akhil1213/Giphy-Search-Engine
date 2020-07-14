import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
   giphyImg:{
       justifyContent:"center"
   },
   listContainer:{
        height:'30%',
        overflow: 'auto',
        flex:'row'
   }
}))
function Images({imageUrls}) {
    const classes = useStyles()
    return (
        imageUrls.length == 0 ? (
            <p>No results!</p>
        )
    :
        (
            <Paper className={classes.listContainer}>
                {imageUrls.map( (image) => {
                    console.log(image)
                    return(
                    <ListItem className={classes.giphyImg}>
                        <img  height = '20%' width = '50%' src={image.images.downsized_medium.url}></img>
                    </ListItem>
                    )
                })}
            </Paper>
        )
    )
}

export default Images;