import React from 'react';
import './ClientOpinion.css';
import {Typography} from '../assets/typography';

type ClientOpinionProps = {
  numberOfStars: number;
  opinion: string;
  name: string;
  job: string;
  img: string;
};

export const ClientOpinion = ({
  numberOfStars,
  opinion,
  name,
  job,
  img,
}: ClientOpinionProps) => {
  const opinionStyle = {
    fontSize: '17px',
    color: '#697694',
  };

  const nameStyle = {
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#697694',
  };

  const jobStyle = {
    fontSize: '14px',
    color: '#697694',
  };

  return (
    <div className="clientContainer">
      <div className="startsContainer">
        {[...Array(numberOfStars)].map((e, i) => (
          <div key={i} className="starContainer">
            <img
              className="star"
              src={require('../assets/img/star.png')}
              alt="star"
            />
          </div>
        ))}
      </div>

      <Typography className="opinion" style={opinionStyle}>
        {opinion}
      </Typography>

      <div className="clientInfoContainer">
        <div className="clientImageContaner">
          <img
            className="clientImg"
            src={require(`../assets/img/clients/${img}`)}
          />
        </div>
        <div className="clientInfo">
          <Typography className="clientName" style={nameStyle}>
            {name}
          </Typography>
          <Typography className="clientJob" style={jobStyle}>
            {job}
          </Typography>
        </div>
      </div>
    </div>
  );
};
