import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';   
import LocationIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

import useStyles from './styles';

const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    return (
            <Card elevation={6}>
                <CardMedia />   
            </Card>
        ); 
}
export default PlaceDetails;