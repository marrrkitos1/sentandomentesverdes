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
    videoPlayRefs,
  } = useAllFunciones();

  return (
    <>
      <Header
        linksRef={linksRef}
        iconRef={iconRef}
      />
      <Main
        imgLogoRef={imgLogoRef}
        videoPlayRefs={videoPlayRefs}
      />
      <Footer />
    </>
  );
}

export default App;
