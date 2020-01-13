import React from 'react';
import { css } from 'emotion';

const headerStyle = css`
  display: flex;
  padding: 20px;
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,.1);
  box-shadow: 0 0 10px rgba(0,0,0,.125);
`;

const headerLeft = css`
  width: 33.33%;
  text-align: left;
`;

const headerCenter = css`
  width: 33.33%;
  text-align: center;
`;

const headerRight = css`
  width: 33.33%;
  text-align: right;
`;

const Header = () => {
  return (
    <React.Fragment>
      <header className={headerStyle}>
        <div className={headerLeft}>Left</div>
        <div className={headerCenter}>Center</div>
        <div className={headerRight}>Right</div>
      </header>
    </React.Fragment>
  );
}

export default Header;