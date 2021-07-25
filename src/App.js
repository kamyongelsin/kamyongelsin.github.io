import React from 'react';
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import WhatsappForm from "./components/WhatsappForm";
import CarrierForm from "./components/CarrierForm";
import Referans from "./components/Referans";
import TurkeyMap from "turkey-map-react";

import './App.css'

function App() {
  return (
    <React.Fragment>
      <Headers />
      {/* <Heroes /> */}
      <WhatsappForm />
      <CarrierForm />
      <Referans />
      <TurkeyMap
        customStyle = {{ idleColor: "#777", hoverColor: "#0d6efd" }}
        cityWrapper={(cityComponent, cityData) => (
          <a href="/#" data-bs-toggle="tooltip" data-bs-placement="bottom" title={cityData.name} key={cityData.id}>
  {cityComponent} 
</a> 
      )}
      />

      <Footer/>
    </React.Fragment>
  );
}

export default App;
