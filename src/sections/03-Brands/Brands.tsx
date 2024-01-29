import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Brands.css';
import {ReactComponent as FacioLogo} from '../../assets/img/logos/FacioLogo.svg';
import {ReactComponent as RockRunLogo} from '../../assets/img/logos/Rock&RunLogo.svg';
import {ReactComponent as FesteFeirnLogo} from '../../assets/img/logos/FesteFeirnLogo.svg';
import {ReactComponent as EternoVeranoLogo} from '../../assets/img/logos/EternoVeranoLogo.svg';
import {ReactComponent as CiGobLogo} from '../../assets/img/logos/CIGOBlogo.svg';
import {ReactComponent as OjovaiLogo} from '../../assets/img/logos/OjovaiLogo.svg';
import {ReactComponent as OpePodcastLogo} from '../../assets/img/logos/OPElogo.svg';
import {ReactComponent as DomingoAmorLogo} from '../../assets/img/logos/DomingoAmorLogo.svg';
import {ReactComponent as MaHuiLogo} from '../../assets/img/logos/MAHUILogo.svg';
import {ReactComponent as VRDotLogo} from '../../assets/img/logos/VRDotLogo.svg';
import {ReactComponent as MonolocoLogo} from '../../assets/img/logos/MonolocoLogo.svg';
import {ReactComponent as CaliforniaLogo} from '../../assets/img/logos/CaliforniaLogo.svg';
import {ReactComponent as MoviGoLogo} from '../../assets/img/logos/MoviGoLogo.svg';




export const Brands = () => {

  const settings = {
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    autoplay: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // <div>TEST</div>S
  <div className='brands font-roboto'>
    <div className='brandTitle'>
      SOME OF THE BRANDS I CREATED
    </div>
    <div className='logoContainer'>
      <Slider {...settings}>
        <div className='logo'><FacioLogo /></div>
        <div className='logo'><RockRunLogo /></div>
        <div className='logo'><FesteFeirnLogo /></div>
        <div className='logo'><EternoVeranoLogo /></div>
        <div className='logo'><CiGobLogo /></div>
        <div className='logo'><OjovaiLogo /></div>
        <div className='logo'><OpePodcastLogo /></div>
        <div className='logo'><DomingoAmorLogo /></div>
        <div className='logo'><MaHuiLogo /></div>
        <div className='logo'><VRDotLogo /></div>
        <div className='logo'><MonolocoLogo /></div>
        <div className='logo'><CaliforniaLogo /></div>
        <div className='logo'><MoviGoLogo /></div>
      </Slider>
    </div>
    
  </div>
  );
};