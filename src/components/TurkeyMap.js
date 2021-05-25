import React from "react";
import TurkeyMap1 from "turkey-map-react";

function TurkeyMap() {

  return (
    <div className="container text-center mt-5">
      <h1 className="display-6 fw-bold lh-1 mb-3">Merkez Ofislerimiz</h1>
      <div className="row mt-5">
        <div className="col-xl-8 offset-xl-2">
          <TurkeyMap1
            onClick = {({ plateNumber, cityName }) =>
              console.log(plateNumber + " - " + cityName + " is just clicked!")
              }
            customStyle = {{ idleColor: "#666", activeColor: "#0d6efd", hoverColor: "#0d6efd" }}
            
          />
        </div>
      </div>
    </div>
  );
}

export default TurkeyMap;
