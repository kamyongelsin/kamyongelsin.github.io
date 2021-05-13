import React from 'react';
import Headers from "./components/Headers";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Referans from "./components/Referans";
import Citys from "./components/Citys";


import './App.css'

function App() {
  return (
    <React.Fragment>
      <Headers />
      {/* <Heroes /> */}
      <Form />
      <Referans />
      <Citys />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
