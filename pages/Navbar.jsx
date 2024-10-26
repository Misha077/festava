import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Festava Live
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
              <li className="nav-item">
                <Link className="nav-link click-scroll" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  Artists
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_6">
                  Contact
                </a>
              </li>
            </ul>
            <Link className="rounded-pill buttonn" href="/ticket">
              Buy Ticket
            </Link>
            {/* <a href="/ticket" className="rounded-pill buttonn">
                Buy Ticket
              </a> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
