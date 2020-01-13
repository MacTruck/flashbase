import React from 'react';
import { css } from 'emotion';

const footerStyle = css`
  position: fixed;
  bottom: 0;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  border-top: 1px solid rgba(0,0,0,.1);
`;

const Footer = () => {
  return (
    <footer className={footerStyle}>This is the footer</footer>
  );
}

export default Footer;