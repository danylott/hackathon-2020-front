import './styles.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

export default function SimpleMap() {
    const [points, setPoints] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/simple/point/')
            .then(res => setPoints(res.data))
            .catch(err => console.log(err));
    }, [])
  return (
    <MapContainer className="simple-map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
        {points.map(point => (
            <Marker position={[point.x, point.y]} key={point.id}>
                {point.use_popup && (
                    <Popup>
                        {point.popup_message}
                    </Popup>
                )}
            </Marker>
        ))}
    </MapContainer>
  );
}
