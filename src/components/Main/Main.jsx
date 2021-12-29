import React, { useContext } from 'react';
import { Card, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './MainStyles';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';
import Infocard from '../Infocard';

const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography align='center' variant='h6'>
                    Total Balance: ${balance}
                </Typography>
                <Typography variant='subtitle2' style={{ lineHeight: '1em', marginTop: '20px' }}>
                    <Infocard />
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={2} >
                    <Grid item xs={12} >
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
