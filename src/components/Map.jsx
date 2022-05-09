import React from "react";

const Map = () => {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude,longitude } = position.coords;
      console.log(latitude,longitude)
    }, function(err){
      console.log(err.message)
    });

  return <div className="w-full bg-red-300">map</div>;
};

export default Map;
