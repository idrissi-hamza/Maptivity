import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = () => {
  // const[position,setPosition]=useState(null)
  const position = [51.505, -0.09];
  // if (navigator.geolocation)
  //   navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       const { latitude, longitude } = position.coords;
  //       // setPosition
  //       console.log(latitude, longitude);
  //     },
  //     function (err) {
  //       console.log(err.message);
  //     }
  //   );

  return (
    <div className="w-full">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
