import React from 'react';
import Navigation from '../components/navigation';
import Splash from '../components/splash';
import Experience from '../components/experience';
import content from '../content';

export default function Home() {
  return (
    <>
      <Navigation content={content} />

      <Splash content={content} />

      <Experience experiences={content.experiences} />

      {/* Stack Section */}
      <section className="success" id="stack">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Technologies</h2>
              <hr className="code-light" />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-1">
              <ul className="no-style">
                <li><img src="/img/php-57.png" alt="PHP version 5 and 7" /></li>
                <li><br/></li>
                <li><img src="/img/mysql.png" alt="MySQL" /></li>
              </ul>
            </div>
            <div className="col-sm-5">
              <ul className="no-style">
                <li><span className="glyphicon glyphicon-flash"></span>I enjoy using Laravel, Symfony PHP frameworks</li>
                <li><span className="glyphicon glyphicon-flash"></span>I know and use Zend, Yii and Wordpress</li>
                <li><span className="glyphicon glyphicon-flash"></span>I compile LESS or SASS for CSS and I write HTML with SEO in mind</li>
                <li><span className="glyphicon glyphicon-flash"></span>I use and build RESTful APIs suitable for AWS and GCP</li>
                <li><span className="glyphicon glyphicon-flash"></span>I host static front end websites on Amazon S3</li>
                <li><span className="glyphicon glyphicon-flash"></span>I use Composer and NPM for dependency management</li>
              </ul>
            </div>
            <div className="col-sm-1">
              <ul className="no-style">
                <li><img src="/img/sf.png" alt="Symfony" /></li>
                <li><br/></li>
                <li><img src="/img/zf.png" alt="ZF" /></li>
              </ul>
            </div>
            <div className="col-sm-5">
              <ul className="no-style">
                <li><span className="glyphicon glyphicon-flash"></span>I enjoy using Javascript to create web based single page applications</li>
                <li><span className="glyphicon glyphicon-flash"></span>I use Browserify or Webpack alongside modern task runners</li>
                <li><span className="glyphicon glyphicon-flash"></span>I use GIT on the terminal with GitHub and BitBucket accounts</li>
                <li><span className="glyphicon glyphicon-flash"></span>I use Docker containers for local development</li>
                <li><span className="glyphicon glyphicon-flash"></span>I Behat, Gerkin, PHPUnit for testing</li>
                <li><span className="glyphicon glyphicon-flash"></span>I use virtual machines for browser testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>My services</h2>
              <hr className="code-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <h3>I am</h3>
              <ul className="no-style service-list">
                <li><span className="glyphicon glyphicon-menu-right"></span>Used to working in an Agile Scrum or Kanban team</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>Passionate about publishing and writing</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>A creative photoshop user with interests in art and design</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>A keen badminton and guitar player</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>The father of two children, whom I love dearly</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h3>I can</h3>
              <ul className="no-style service-list">
                <li><span className="glyphicon glyphicon-menu-right"></span>Write and maintain modern, robust and testable computer programming</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>Write and maintain unit, integration and acceptance tests for quality as
                  <li><span className="glyphicon glyphicon-menu-right"></span>Deliver sprint goals, refine stories and provide estimates</li>surance</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>Provide Front and Back-end (API) design, development and maintenance</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>Integrate or build custom and product digital solutions and services</li>
              </ul>
            </div>
            <div className="col-sm-4">
              <h3>I know</h3>
              <ul className="no-style service-list">
                <li><span className="glyphicon glyphicon-menu-right"></span>A range of open-source programming languages and frameworks</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>Digital loyalty programs, campaigns and schemes</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>Version control, release workflow and deployment strategies</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>Social media and have domain knowledge for banking, automotive and pharmaceutical industries</li>
                <li><span className="glyphicon glyphicon-menu-right"></span>Server maintenance, software and infrastructure as a service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="success" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>About</h2>
              <hr className="code-light" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <p>I'm a highly experienced, agile and knowledgeable senior software engineer, with more than 10 years commercial expertise, providing both front and back-end development services for digital products on mobile, EPoS and desktop devices.</p>
            </div>
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <a href="cv/chris-hardcastle-cv.pdf" target="_blank" className="btn btn-lg btn-outline bright-bg-btn">
                <i className="fa fa-file-pdf-o"></i> Download CV (PDF)
              </a><br/><br/>
              <a href="cv/chris-hardcastle-cv.docx" target="_blank">
                <i className="fa fa-file-word-o"></i> Download CV (Word)
              </a>
            </div>
          </div>
        </div>
      </section>

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
