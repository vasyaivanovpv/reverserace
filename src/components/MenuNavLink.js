import React from 'react';
import { Route, Link } from 'react-router-dom';

const MenuNavLink = ({ to, exact, children }) => {
  return (
    <Route exact={exact} path={to.toString()}>
      {({ match }) => (
        <span
          className={match ? 'Header-item Header-isItemActive' : 'Header-item'}
        >
          <Link to={to} className="Link-root">
            {children}
          </Link>
        </span>
      )}
    </Route>
  );
};

export default MenuNavLink;
