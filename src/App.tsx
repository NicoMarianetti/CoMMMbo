import React from 'react';
import './App.css';
import {Header} from './sections/00-Header/Header';
import {Welcome} from './sections/01-Welcome/Welcome';
import {Experience} from './sections/02-Experience/Experience';
import {Brands} from './sections/03-Brands/Brands';
import {Versatility} from './sections/04-Versatility/Versatility';
import {FeatureProjects} from './sections/05-FeatureProjects/FeatureProjects';
import {ClientsOpinions} from './sections/06-ClientsOpinions/ClientsOpinions';
import {AI} from './sections/07-AI/AI';
import {Connect} from './sections/08-Connect/Connect';
import {Footer} from './sections/99-Footer/Footer';
import {Typography} from './assets/typography';
import {ContactButton} from './components/ContactButton';

function App() {
  return (
    <div className="generalContainer">
      <Header />
      <Welcome />
      <Experience />
      <Brands />
      <Versatility />
      {/* <FeatureProjects /> */}
      <ClientsOpinions />
      <div className="getInTouchContainer">
        <ContactButton
          text="GET IN TOUCH"
          borderColor="#F3FA58"
          fontSize="40px"
          height={250}
          width={250}
          onClick={() => {}}
          textColor="#F3FA58"
          backgroundColorHover="#F3FA58"
          textHoverColor="#000000"
        />
      </div>
      <AI />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
