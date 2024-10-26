import React from "react";

function footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h2 className="text-white mb-lg-0">Festava Live</h2>
              </div>
              <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
                <ul className="social-icon d-flex justify-content-lg-end">
                  <li className="social-icon-item">
                    <a
                      href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
                      className="social-icon-link"
                    >
                      <span className="bi-twitter" />
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a
                      href="https://www.apple.com/in/store?afid=p238%7Cs8Vs8GkTq-dc_mtid_187079nc38483_pcrid_673869785948_pgrid_112258962467_pntwk_g_pchan__pexid__&cid=aos-IN-kwgo-brand--slid---product-"
                      className="social-icon-link"
                    >
                      <span className="bi-apple" />
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a
                      href="https://www.instagram.com/"
                      className="social-icon-link"
                    >
                      <span className="bi-instagram" />
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a href="youtube.com" className="social-icon-link">
                      <span className="bi-youtube" />
                    </a>
                  </li>
                  <li className="social-icon-item">
                    <a
                      href="https://in.pinterest.com/"
                      className="social-icon-link"
                    >
                      <span className="bi-pinterest" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-4 pb-2">
              <h5 className="site-footer-title mb-3">Links</h5>
              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <a href="#section_1" className="site-footer-link">
                    Home
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#section_2" className="site-footer-link">
                    About
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#section_3" className="site-footer-link">
                    Artists
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#section_4" className="site-footer-link">
                    Schedule
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#section_5" className="site-footer-link">
                    Pricing
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#section_6" className="site-footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
              <h5 className="site-footer-title mb-3">Have a question?</h5>
              <p className="text-white d-flex mb-1">
                <a href="tel: 090-080-0760" className="site-footer-link">
                  090-080-0760
                </a>
              </p>
              <p className="text-white d-flex">
                <a href="mailto:hello@company.com" className="site-footer-link">
                  hello@company.com
                </a>
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
              <h5 className="site-footer-title mb-3">Location</h5>
              <p className="text-white d-flex mt-3 mb-2">
                Silang Junction South, Tagaytay, Cavite, Philippines
              </p>
              <a
                className="link-fx-1 color-contrast-higher mt-3"
                href="https://www.google.com/maps/@30.8234471,76.5834984,15z?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
              >
                <span>Our Maps</span>
                <svg className="icon" viewBox="0 0 32 32" aria-hidden="true">
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={16} cy={16} r="15.5" />
                    <line x1={10} y1={18} x2={16} y2={12} />
                    <line x1={16} y1={12} x2={22} y2={18} />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-12 mt-5">
                <p className="copyright-text">
                  Copyright © 2036 Festava Live Company
                </p>
                <p className="copyright-text">
                  Distributed by: <a href="https://facebook.com">Misha</a>
                </p>
              </div>
              <div className="col-lg-8 col-12 mt-lg-5">
                <ul className="site-footer-links">
                  <li className="site-footer-link-item">
                    <a href="#" className="site-footer-link">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="site-footer-link-item">
                    <a href="#" className="site-footer-link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="site-footer-link-item">
                    <a href="#" className="site-footer-link">
                      Your Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
