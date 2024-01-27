import React from 'react';
import './Footer.css';
import {Typography} from '../../assets/typography';
import {theme} from '../../assets/theme';

export const Footer = () => {
  const styleTitleFooter = {
    color: theme.text.main,
    fontSize: '16px',
    fontWeight: 600,
    margin: 0,
  };

  const styleContentFooter = {
    color: theme.text.main,
    fontSize: '11px',
    margin: 0,
  };

  return (
    <div className="footerContainer">
      <div className="infoContainerFooter">
        <p></p>
        <Typography style={styleTitleFooter}>Company</Typography>
        <Typography style={styleTitleFooter}>Features</Typography>
        <Typography style={styleTitleFooter}>Contact Us</Typography>
        <Typography style={styleTitleFooter}>Stay up to date</Typography>

        <Typography style={styleContentFooter}>
          Collaboration platform for modern teams.
        </Typography>
        <div className="contentContainerFooter">
          <Typography style={styleContentFooter}>About</Typography>
          <Typography style={styleContentFooter}>Careers</Typography>
          <Typography style={styleContentFooter}>Support</Typography>
          <Typography style={styleContentFooter}>Knowledgebase</Typography>
        </div>

        <div className="contentContainerFooter">
          <Typography style={styleContentFooter}>Screen Sharing</Typography>
          <Typography style={styleContentFooter}>iOS & Android Apps</Typography>
          <Typography style={styleContentFooter}>File Sharing</Typography>
          <Typography style={styleContentFooter}>User Management</Typography>
        </div>

        <div className="contentContainerFooter">
          <Typography style={styleContentFooter}>info@teamapp.com</Typography>
          <Typography style={styleContentFooter}>1-800-200-300</Typography>
          <Typography style={styleContentFooter}>
            1010 Sunset Blv. Palo Alto, California
          </Typography>
        </div>

        <div className="contentContainerFooter">
          <Typography style={styleContentFooter}>
            Subscribe to our newsletter
          </Typography>
        </div>
      </div>
      <Typography
        style={{
          ...styleContentFooter,
          fontWeight: 'lighter',
        }}>
        © Copyright DyPF.
      </Typography>
    </div>
  );
};
