import React from "react";

function artists() {
  return (
    <div>
      <section className="artists-section section-padding" id="section_3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h2 className="mb-4">Meet Artists</h2>
            </div>
            <div className="col-lg-5 col-12">
              <div className="artists-thumb">
                <div className="artists-image-wrap">
                  <img
                    src="images/artists/joecalih-UmTZqmMvQcw-unsplash.jpg"
                    className="artists-image img-fluid"
                  />
                </div>
                <div className="artists-hover">
                  <p>
                    <strong>Name:</strong>
                    Madona
                  </p>
                  <p>
                    <strong>Birthdate:</strong>
                    August 16, 1958
                  </p>
                  <p>
                    <strong>Music:</strong>
                    Pop, R&amp;B
                  </p>
                  <hr />
                  <p className="mb-0">
                    <strong>Youtube Channel:</strong>
                    <a href="https://www.youtube.com/@madonna">
                      Madona Official
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="artists-thumb">
                <div className="artists-image-wrap">
                  <img
                    src="images/artists/abstral-official-bdlMO9z5yco-unsplash.jpg"
                    className="artists-image img-fluid"
                  />
                </div>
                <div className="artists-hover">
                  <p>
                    <strong>Name:</strong>
                    Rihana
                  </p>
                  <p>
                    <strong>Birthdate:</strong>
                    Feb 20, 1988
                  </p>
                  <p>
                    <strong>Music:</strong>
                    Country
                  </p>
                  <hr />
                  <p className="mb-0">
                    <strong>Youtube Channel:</strong>
                    <a href="https://www.youtube.com/@rihanna">
                      Rihana Official
                    </a>
                  </p>
                </div>
              </div>
              <div className="artists-thumb">
                <img
                  src="images/artists/soundtrap-rAT6FJ6wltE-unsplash.jpg"
                  className="artists-image img-fluid"
                />
                <div className="artists-hover">
                  <p>
                    <strong>Name:</strong>
                    Bruno Bros
                  </p>
                  <p>
                    <strong>Birthdate:</strong>
                    October 8, 1985
                  </p>
                  <p>
                    <strong>Music:</strong>
                    Pop
                  </p>
                  <hr />
                  <p className="mb-0">
                    <strong>Youtube Channel:</strong>
                    <a href="https://www.youtube.com/@bruno1/playlists">
                      Bruno Official
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default artists;
