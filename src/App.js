import React from 'react';
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Referans from "./components/Referans";
import TurkeyMap from "turkey-map-react";

import './App.css'

function App() {
  return (
    <React.Fragment>
      <Headers />
      {/* <Heroes /> */}
      <Form />
      <Referans />

      <TurkeyMap
        customStyle = {{ idleColor: "#777", hoverColor: "#0d6efd" }}
        cityWrapper={(cityComponent, cityData) => (
          <a data-bs-toggle="tooltip" data-bs-placement="bottom" title={cityData.name} key={cityData.id}>
  {cityComponent} 
</a> 
      )}
      />

      <Footer/>
    </React.Fragment>
  );
}

export default App;
