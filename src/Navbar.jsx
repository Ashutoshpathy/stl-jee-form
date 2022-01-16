import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <h5 className="nav-link" href="#">
                Home
              </h5>
            </li>
            <li className="nav-item">
              <h5 className="nav-link" href="#">
                Contact Us
              </h5>
            </li>
            <li className="nav-item">
              <h5 className="nav-link light" href="#">
                Archive
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
