import React from "react";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import LocationMarker from "./LocationMarker";
import Locations from "./Locations";

const Map = () => {
  const ZOOM = 13;
  const [location, setLocation] = useState({
    loading: true,
    coordinates: { lat: "", lng: "" },
  });


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setLocation({
            loading: false,
            coordinates: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        },
        function (err) {
          // alert(err.message);
          setLocation({
            loading: false,
            err,
          });
        }
      );
    }
  }, []);

  return (
    <div className="w-full">
      {!location.loading && !location.err && (
        <MapContainer
          center={[location.coordinates.lat, location.coordinates.lng]}
          zoom={ZOOM}
          scrollWheelZoom={false}
          // onClick={}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          <Locations />
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
