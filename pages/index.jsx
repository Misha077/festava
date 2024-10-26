import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
// import styles from './page.module.css'
// import styles from "../app/css/bootstrap.min.css";
// import Footer from "../app/footer"
// import Contact from "../app/contact"
// import Plans from "../app/plans"
// import Schedule from "../app/schedule"
// import Artists from "./artists/page"
// import Header from "./Header";
// import About from "./about/page"
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./about";
import Artists from "./artists";
import Contact from "./contact";
import Schedule from "./schedule";
import Footer from "./footer";
import Plans from "./plans";
export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Navbar />

        <section className="hero-section" id="section_1">
          <div className="section-overlay" />
          <div className="container d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-12 mt-auto mb-5 text-center">
                <small>Festava Live Presents</small>
                <h1 className="text-white mb-5">Night Live 2023</h1>
                {/* <a className="btn custom-btn smoothscroll" href="#section_2">
                  Let's begin
                </a> */}
                <Link className="rounded-pill button" href="#section_2">
                  Lets begin
                </Link>
              </div>
              <div className="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
                <div className="date-wrap">
                  <h5 className="text-white">
                    <i className="custom-icon bi-clock me-2" />
                    10 - 12<sup>th</sup>, Dec 2023
                  </h5>
                </div>
                <div className="location-wrap mx-auto py-3 py-lg-0">
                  <h5 className="text-white">
                    <i className="custom-icon bi-geo-alt me-2" />
                    National Center, United States
                  </h5>
                </div>
                <div className="social-share">
                  <ul className="social-icon d-flex align-items-center justify-content-center">
                    <span className="text-white me-3">Share:</span>
                    <li className="social-icon-item">
                      <a
                        href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C550525804791%7Cb%7Cfacebook%20%27%7C&placement=&creative=550525804791&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D9303130%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBWuv7QzOMDe0iFGlzkzEDz4eIEX9YAWwg6TwfBK-13dSEdAJdj4wNxoCOKIQAvD_BwE"
                        className="social-icon-link"
                      >
                        <span className="bi-facebook" />
                      </a>
                    </li>
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
                        href="https://www.instagram.com/"
                        className="social-icon-link"
                      >
                        <span className="bi-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <img src="images/DSC06343.avif" className="about-image img-fluid" /> */}

          <div className="video-wrap">
            <video
              className="custom-video"
              src="/video/pexels-2022395.mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </section>

        <About />
        <Artists />
        <Schedule />
        <Plans />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
