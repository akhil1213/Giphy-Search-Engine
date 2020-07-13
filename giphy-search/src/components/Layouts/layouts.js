import React from 'react';
import Search from '../SearchEngine/Search'
import Ratings from '../rating/rating'
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    container:{
        marginTop:theme.spacing(4)
    }
}))
function Layout() {
    const classes = useStyles()
  return (
    <div className="App">
        <Container maxWidth="lg">
            <Grid container spacing={1} className={classes.container}>
                <Grid item xs={11} md={11} lg={11}>
                    <Search/>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Ratings/>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

export default Layout;