import React from 'react';
import './ClientsOpinions.css';
import {Typography} from '../../assets/typography';
import {ClientOpinion} from '../../components/ClientOpinion';
import Slider, {Settings} from 'react-slick';

type Client = {
  numberOfStars: number;
  opinion: string;
  name: string;
  job: string;
  img: string;
};

export const ClientsOpinions = () => {
  const clients: Client[] = [
    {
      numberOfStars: 5,
      opinion:
        'Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.',
      name: 'Amy Goldberg',
      job: 'CEO at Slack',
      img: 'client1.png',
    },
    {
      numberOfStars: 5,
      opinion:
        'Eros nulla mollis nec tortor. Eu class ante accumsan habitant morbi neque hac purus magnis varius pulvinar hac pede magnis.',
      name: 'Lina Sloan',
      job: 'Content Writer at Uber',
      img: 'client2.png',
    },
    {
      numberOfStars: 5,
      opinion:
        'Sociosqu habitasse vulputate odio nisi phasellus. Cras luctus sit leo pharetra nec semper commodo rutrum aptent feugiat.',
      name: 'Jon Jandali',
      job: 'CTO at Loom',
      img: 'client3.png',
    },
    {
      numberOfStars: 5,
      opinion:
        'Faucibus. At penatibus ad cubilia risus senectus varius sociis suspendisse integer suspendisse turpis senectus pellentesque nibh iaculis.',
      name: 'Erik Hendrix',
      job: 'CTO at Slack',
      img: 'client4.png',
    },
  ];

  const settings: Settings = {
    speed: 1000,
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  const clientsOpinionsTitleStyle = {
    fontSize: '60px',
    fontWeight: '700',
    color: '#dacaff',
    width: '50%',
  };

  return (
    <div className="clientsOpinionsContainer">
      <Typography
        className="clientsOpinionsTitle"
        style={clientsOpinionsTitleStyle}>
        WHAT CLIENTS SAY ABOUT MY WORK
      </Typography>
      <Slider {...settings}>
        {clients.map((client, index) => (
          <ClientOpinion key={index} {...client} />
        ))}
      </Slider>
    </div>
  );
};
