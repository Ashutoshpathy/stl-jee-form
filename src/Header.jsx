import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand">Navbar</p>
        <form className="d-flex">
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
