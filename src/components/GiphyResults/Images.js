import React , {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Paper,Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles(theme => ({
   giphyImg:{
       justifyContent:"center"
   },
   listContainer:{
        height:'30%',
        overflow: 'auto',
        flex:'row',
        marginTop:'5%'
   },
   center:{
       textAlign:'center'
   }
}))

const Images = ({imageUrls,errorMsg}) => {
    const classes = useStyles()
    useEffect(() => {
        
    }, [])
    return (
        imageUrls.length == 0 ? (
            <Typography color = 'error' variant="h1" component="h2" className={classes.center}>{errorMsg}</Typography>
            //there should always only be one h1 on page
        )
    :
        (
            <Paper className={classes.listContainer}>
                <Container maxWidth="lg">
                    <Grid container spacing={1} className={classes.container}>
                        {imageUrls.map( (image,index) => {
                            return(
                                <Grid item xs={6} md={4} lg={4}>
                                    <ListItem className={classes.giphyImg} key={index}>
                                        <img  height = '20%' width = '50%' src={image.images.downsized_medium.url}></img>
                                    </ListItem>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Paper>
        )
    )
}

export default Images;