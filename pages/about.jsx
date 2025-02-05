import React from "react";
import Image from "next/image";

function about() {
  return (
    <div>
      <section className="about-section section-padding" id="section_2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
              <div className="services-info">
                <h2 className="text-white mb-4">About Festava 2022</h2>
                <p className="text-white">
                  Festava Live is free CSS template provided by TemplateMo
                  website. This layout is built on Bootstrap v5.2.2 CSS library.
                  You are free to use this template for your commercial website.
                </p>
                <h6 className="text-white mt-4">Once in Lifetime Experience</h6>
                <p className="text-white">
                  You are not allowed to redistribute the template ZIP file on
                  any other website without a permission.
                </p>
                <h6 className="text-white mt-4">Whole Night Party</h6>
                <p className="text-white">
                  Please tell your friends about our website. Thank you.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-text-wrap">
                <img
                  alt="about"
                  src="images/pexels-alexander-suhorucov-6457579.jpg"
                  className="about-image img-fluid"
                />
                <div className="about-text-info d-flex">
                  <div className="d-flex">
                    <i className="about-text-icon bi-person" />
                  </div>
                  <div className="ms-4">
                    <h3>a happy moment</h3>
                    <p className="mb-0">
                      your amazing festival experience with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default about;
