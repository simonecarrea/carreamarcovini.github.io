// src/components/GoogleMap.js

import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function GoogleMapComponent() {
  const containerStyle = {
    height: '400px',
  };

  const center = {
    lat: 44.6641298,// Imposta la latitudine del tuo punto di interesse
    lng: 8.7871358, // Imposta la longitudine del tuo punto di interesse
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Aggiungi Marker per indicare il punto di interesse */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default GoogleMapComponent;
