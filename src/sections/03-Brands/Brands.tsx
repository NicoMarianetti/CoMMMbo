import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
import {Typography} from '../../assets/typography';
import {theme} from '../../assets/theme';

export const Brands = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    speed: 200,
    arrows: false,
    centerMode: true,
    focusOnSelect: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const brandsTitle = {
    fontSize: '60px',
    fontWeight: '700',
    width: '50%',
    color: theme.text.main,
  };

  return (
    <div className="brands font-roboto">
      <div className="brandsTitleContainer">
        <Typography style={brandsTitle}>
          SOME OF THE BRANDS I CREATED
        </Typography>
      </div>
      <div className="logoContainer">
        <Slider {...settings}>
          <div className="brand">
            <FacioLogo />
          </div>
          <div className="brand">
            <RockRunLogo />
          </div>
          <div className="brand">
            <FesteFeirnLogo />
          </div>
          <div className="brand">
            <EternoVeranoLogo />
          </div>
          <div className="brand">
            <CiGobLogo />
          </div>
          <div className="brand">
            <OjovaiLogo />
          </div>
          <div className="brand">
            <OpePodcastLogo />
          </div>
          <div className="brand">
            <DomingoAmorLogo />
          </div>
          <div className="brand">
            <MaHuiLogo />
          </div>
          <div className="brand">
            <VRDotLogo />
          </div>
          <div className="brand">
            <MonolocoLogo />
          </div>
          <div className="brand">
            <CaliforniaLogo />
          </div>
          <div className="brand">
            <MoviGoLogo />
          </div>
        </Slider>
      </div>
    </div>
  );
};
