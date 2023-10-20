import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header>
      <nav className="container flex flex-row justify-around">
        <NavLink className="navbar__item">
          <h1 className="text-2xl text center">Whether Prognostic </h1>
        </NavLink>
        <p className="navbar__item">Logo</p>
      </nav>
    </header>
  );
}

export default Navbar;
