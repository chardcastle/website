import React from 'react';
import Navigation from '../components/navigation';
import Splash from '../components/splash';
import Experience from '../components/experience';
import Stack from '../components/stack';
import Services from '../components/services';
import content from '../content';
import About from "../components/about";

export default function Home() {
  return (
    <>
      <Navigation content={content} />

      <Splash content={content} />

      <Experience experiences={content.experiences} />

      <Stack primary={content.stack.primary} secondary={content.stack.secondary} />

      <Services services={content.services} />

      {/* About Section */}
      <About content={content.about} />

      {/* Scroll to Top Button (Only visible on small and extra-small screen sizes) */}
      <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
        <a className="btn btn-primary" href="#page-top">
          <i className="fa fa-chevron-up" />
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-md-6">
                <h3>Location</h3>
                <p>London, UK</p>
              </div>
              <div className="footer-col col-md-6">
                <h3>Around the Web</h3>
                <ul className="list-inline">
                  <li>
                    <a href="https://uk.linkedin.com/in/chardcastle" target="_blank" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/hardcastle" target="_blank" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="https://github.com/chardcastle" target="_blank" className="btn-social btn-outline"><i className="fa fa-fw fa-github"></i></a>
                  </li>
                  <li>
                    <a href="https://soundcloud.com/memesmusic" target="_blank" className="btn-social btn-outline"><i className="fa fa-fw fa-soundcloud"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                Copyright &#169; Chris Hardcastle 2020
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
