import { useState } from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { icon } from "leaflet";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function LocationMarker() {
  const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
  });
  const { dispatch } = useContext(GlobalContext);

  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      console.log(e.latlng);
      setPosition(e.latlng);

      dispatch({ type: "ENABLE_FORM" });
      dispatch({ type: "LOCATION", payload: e.latlng });
      // map.locate(e);
    },
    // locationfound(e) {
    //   setPosition(e.latlng);
    //   map.flyTo(e.latlng, map.getZoom());
    // },
  });

  return position === null ? null : (
    <Marker icon={ICON} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default LocationMarker;
