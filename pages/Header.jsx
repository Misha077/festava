import React from "react";

function Header() {
  return (
    <div>
      <header className="site-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 d-flex flex-wrap">
              <p className="d-flex me-4 mb-0">
                <i className="bi-person custom-icon me-2" />
                <strong className="text-dark">
                  Welcome to Music Festival 2023
                </strong>
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
