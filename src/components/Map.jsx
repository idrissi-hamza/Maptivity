import React from "react";
import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { icon } from "leaflet";
const ICON = icon({
  iconUrl: "/marker.png",
  iconSize: [32, 32],
});

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

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        setPosition(e.latlng);

        // map.locate(e);
      },
      // locationfound(e) {
      //   setPosition(e.latlng);
      //   map.flyTo(e.latlng, map.getZoom());
      // },
    });

    return position === null ? null : (
      <Marker className='' icon={ICON} position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

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
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
