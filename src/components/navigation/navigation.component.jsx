import { NavLink } from 'react-router-dom';

import './navigation.style.scss';

const Navigation = () => {
  const navigationLink = (to, label) => (
    <NavLink
      to={to}
      activeClassName="navigation__item--active"
      className="navigation__item"
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="navigation">
      {navigationLink("/", "Catalog")}
      {navigationLink("/orders", "Orders")}
    </nav>
  );
};

export default Navigation;