import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';   
import LocationIcon from '@material-ui/icons/LocationOn';

const PlaceDetails = ({ place }) => {
    return (
        <h1>{place.name}</h1>
    ); 
}
export default PlaceDetails;