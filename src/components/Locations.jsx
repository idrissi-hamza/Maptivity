import { Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function Locations() {
  const { notesList } = useContext(GlobalContext);
  const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
  });

  return (
    <>
      {notesList.map((note) => (
        <Marker position={[note.lat, note.lng]} icon={ICON} key={note.id}>
          <Popup>
            <b>{note.value}</b>
          </Popup>
        </Marker>
      ))}
      ;
    </>
  );
}

export default Locations;
