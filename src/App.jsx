import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useAllFunciones } from './funciones.js';

function App() {
  const {
    linksRef,
    iconRef,
    imgLogoRef,
  } = useAllFunciones();

  return (
    <>
      <Header
        linksRef={linksRef}
        iconRef={iconRef}
      />
      <Main imgLogoRef={imgLogoRef} />
      <Footer />
    </>
  );
}

export default App;
