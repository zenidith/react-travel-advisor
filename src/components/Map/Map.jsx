import React from 'react';
import googleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className={classes.mapContainer}>
            <googleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDuW8ilAul-u9oMcaq8w5IuVqMYUevFns8' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    console.log(e);
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
                }}
                onChildClick={''}
                >
            </googleMapReact>
        </div>
    );
}

export default Map;