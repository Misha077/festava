import React from "react";

function schedule() {
  return (
    <div>
      <section className="schedule-section section-padding" id="section_4">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="text-white mb-4">Event Schedule</h2>
              <div className="table-responsive">
                <table className="schedule-table table table-dark">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Wednesday</th>
                      <th scope="col">Thursday</th>
                      <th scope="col">Friday</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Day 1</th>
                      <td className="table-background-image-wrap pop-background-image">
                        <h3>Pop Night</h3>
                        <p className="mb-2">5:00 - 7:00 PM</p>
                        <p>By Adele</p>
                        <div className="section-overlay" />
                      </td>
                      <td style={{ backgroundColor: "#F3DCD4" }} />
                      <td className="table-background-image-wrap rock-background-image">
                        <h3>Rock &amp; Roll</h3>
                        <p className="mb-2">7:00 - 11:00 PM</p>
                        <p>By Rihana</p>
                        <div className="section-overlay" />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Day 2</th>
                      <td style={{ backgroundColor: "#ECC9C7" }} />
                      <td>
                        <h3>DJ Night</h3>
                        <p className="mb-2">6:30 - 9:30 PM</p>
                        <p>By Rihana</p>
                      </td>
                      <td style={{ backgroundColor: "#D9E3DA" }} />
                    </tr>
                    <tr>
                      <th scope="row">Day 3</th>
                      <td className="table-background-image-wrap country-background-image">
                        <h3>Country Music</h3>
                        <p className="mb-2">4:30 - 7:30 PM</p>
                        <p>By Rihana</p>
                        <div className="section-overlay" />
                      </td>
                      <td style={{ backgroundColor: "#D1CFC0" }} />
                      <td>
                        <h3>Free Styles</h3>
                        <p className="mb-2">6:00 - 10:00 PM</p>
                        <p>By Members</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default schedule;
