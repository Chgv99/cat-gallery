import React from "react";

import Header from './Header';
//import Banner from './Banner';
import Footer from './Footer';
import Body from './Body';

//import fetchImg from './Backend/FetchImg';

const App = () => {
  return (
    <>
      <div className="mx-9" Style="height: 100%">
      <Header />
      <Body />
      <Footer />
      </div>
    </>
  );
}

export default App;
