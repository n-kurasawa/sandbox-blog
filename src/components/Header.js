import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">
        <Link to="/">BLOG</Link>
      </span>
      <div className="mdl-layout-spacer"></div>
    </div>
  </header>
);

export default Header;