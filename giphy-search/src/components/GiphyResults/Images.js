import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Image from 'material-ui-image'

const useStyles = makeStyles(theme => ({
   
}))
function Images({imageUrls}) {
    const classes = useStyles()
    return (
        imageUrls.length == 0 ? (
            <p>No results!</p>
        )
    :
        (
            <div className="App">
                {imageUrls.map( (image) => {
                    console.log(image)
                    return(
                    <ListItem>
                        <img src={image.images.downsized_medium.url} alt="Girl in a jacket"></img>
                    </ListItem>
                    )
                })}
            </div>
        )
    )
}

export default Images;