import styles from './index.module.css';
import HeadElement from '../components/headElement';
import Navigation from '../components/navigation';
import Splash from "../components/splash";


export default function Home() {
  return (
    <>
      <HeadElement />
      <Navigation />
      <Splash />

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Experience</h2>
              <hr className="code-primary" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 experience-item">
              <a href="#experienceModal0" className="experience-link" data-toggle="modal" data-backdrop="static" data-keyboard="true">
                <div className="caption">
                  <div className="caption-content">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img src="/img/experience/eagleeye.png" className="img-responsive" alt="" />
              </a>
            </div>
            <div className="col-sm-4 experience-item">
              <a href="#experienceModal1" className="experience-link" data-toggle="modal">
                <div className="caption">
                  <div className="caption-content">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img src="/img/experience/burberry.png" className="img-responsive" alt="" />
              </a>
            </div>
            <div className="col-sm-4 experience-item">
              <a href="#experienceModal2" className="experience-link" data-toggle="modal">
                <div className="caption">
                  <div className="caption-content">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img src="/img/experience/bafta.png" className="img-responsive" alt="" />
              </a>
            </div>
            <div className="col-sm-4 experience-item">
              <a href="#experienceModal3" className="experience-link" data-toggle="modal">
                <div className="caption">
                  <div className="caption-content">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img src="/img/experience/belron.png" className="img-responsive" alt="" />
              </a>
            </div>
            <div className="col-sm-4 experience-item">
              <a href="#experienceModal4" className="experience-link" data-toggle="modal">
                <div className="caption">
                  <div className="caption-content">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img src="/img/experience/goc.png" className="img-responsive" alt="" />
              </a>
            </div>
            <div className="col-sm-4 experience-item">
              <a href="#experienceModal5" className="experience-link" data-toggle="modal">
                <div className="caption">
                  <div className="caption-content">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img src="/img/experience/emotive.png" className="img-responsive" alt="" />
              </a>
            </div>
            <div className="col-sm-4 experience-item">
              <a href="#experienceModal6" className="experience-link" data-toggle="modal">
                <div className="caption">
                  <div className="caption-content">
                    <i className="fa fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img src="/img/experience/splash.png" className="img-responsive" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

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
          <i className="fa fa-chevron-up"></i>
        </a>
      </div>

      {/* Experience Modals */}
      <div className="experience-modal modal fade" id="experienceModal0" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Eagle Eye Solutions</h2>
                  <hr className="code-primary" />
                    <p>As a Senior Developer designing, building and delivering API endpoints and scripts on public API’s within Eagle Eye’s AIR platform. These were MVP’s, custom and product features which handled requests from mobile apps, retail point of sale equipment (EPoS), CRM and retail systems all over the UK.</p>
                    <p>Leading the team to design, build and deliver a legacy XML based EPoS API within the AIR platform, assisting and supporting the migration of new and existing well known high street retailers to this service. Expanding the solution to include EES digital wallet products and consumer search for JDSports.</p>
                    <p>Writing console based scripts to import coupon and consumer data for clients such as Thomas Pink and Clarks. Other scripts I wrote searched for and reported on financial transactions, campaign activity and consumer data.</p>
                    <p>Innovation with technologies such as Rabbit MQ was required to handle the extremely high volumes of data and API traffic.</p>
                    <ul className="list-inline item-details">
                      <li>Client:
                        <strong>Eagle Eye Solutions
                        </strong>
                      </li>
                      <li>Date:
                        <strong>August 2016 - Present
                        </strong>
                      </li>
                      <li>Skills used:
                        <strong>PHP, MySQL, RabbitMQ, Javascript, Docker, Swagger, JSON
                        </strong>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-modal modal fade" id="experienceModal1" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Burberry</h2>
                  <hr className="code-primary" />
                    <p>A member of the IT solutions team: producing web based solutions to improve department expenditure reporting, communication and IT support.</p>
                    <p>The project was required to present data collected via an RSS feed. Whilst employed for PHP, it was necessary for me to led the development of a #C web application. I was asked to expand it other departments, I did this at no extra cost because it used the MVC extension for ASP.NET 3.5 which I found to be quite flexible.</p>

                    <ul className="list-inline item-details">
                      <li>Client:
                        <strong>Burberry
                        </strong>
                      </li>
                      <li>Date:
                        <strong>December 2009 - September 2010 (10 months)
                        </strong>
                      </li>
                      <li>Skills used:
                        <strong>PHP, C#, Project Management, AWS, EC2, Kohana, GIT, jQuery
                        </strong>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-modal modal fade" id="experienceModal2" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>BAFTA</h2>
                  <hr className="code-primary" />
                    <p>Working with a highly skilled, experienced and innovative scrum team to prototype a new digital product. To BAFTA's standard of excellence within Film and Media technology, I designed, developed and integrated a founding front-end website as the face for a large and highly scalable API based backend. I also contributed to the AWS infrastructure, configuration, research and backend development.</p>
                    <p>I really enjoyed evaluating new technologies and making use of my existing skills and experience, using scrum was an enjoyable and very beneficial exercise. I expanded some existing skills and have provided them with an excellent single page application framework in exchange.</p>
                    <ul className="list-inline item-details">
                      <li>Client:
                        <strong>BAFTA Research (Is now BAFTA Media Technology)
                        </strong>
                      </li>
                      <li>Date:
                        <strong>January 2016 - April 2016 (4 months)
                        </strong>
                      </li>
                      <li>Skills used:
                        <strong>ReactJS, Flux, AWS, BackboneJS, RequireJS, UnderscoreJS, GIT, Scrum, Vagrant, Symfony 2, PHPUnit, Mocha, Selenium
                        </strong>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-modal modal fade" id="experienceModal3" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Belron</h2>
                  <hr className="code-primary" />
                    <p>Responsible for the development towards the UK Autoglass website which delivered an optimised version for mobile devices and tablets. It’s the number one site for vehicle glass repair and replacements.</p>
                    <p>I styled the customer portal in which customers can manage their online appointments. I built the landing page in which customers specify the vehicle glass damage. I was instrumental in solving some design and functionality issues in this area and produced some of the graphics myself. My work was a graceful expansion around a complex and pre-existing Zend based solution.</p>
                    <p>I enjoyed working with the team and on my own as lead on another project providing content for closed UK Autoglass branch pages. I also mastered some GIT development cycle processes including deployment, branch management and became interested in automated testing and continuous integration.</p>
                    <ul className="list-inline item-details">
                      <li>Agency:
                        <strong>Net Efficiency
                        </strong>
                      </li>
                      <li>Date:
                        <strong>March 2015 - December 2015 (7 months)
                        </strong>
                      </li>
                      <li>Service:
                        <strong> Zend version 1 and 2, Composer, MySQL, GIT, HTML, CSS, jQuery
                        </strong>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-modal modal fade" id="experienceModal4" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>General Optical Council</h2>
                  <hr className="code-primary" />
                    <p>I was the lead developer on an e-learning management platform for the General Optical Council. This included the design, development, testing and support of new features for around 20 thousand active users.</p>
                    <p>This also included a range of amends to existing features. The system covered all UK GOC registered opticians and helped the client determine who is inline with their legal obligations.</p>
                    <p>The project was written in YII, I add lots of extra functionality after it was launched in 2013, I led the system through annual reporting years, ad hoc development, user support enquiries,
                      a change in overnight syncronisation with a new Microsoft CRM system, documentation, design, reporting, database design and management. This was achieved with my PHP provided as custom classNamees and modules within the YII framework along with database deltas that managed changes.</p>
                    <ul className="list-inline item-details">
                      <li>Agency:
                        <strong>think emotive
                        </strong>
                      </li>
                      <li>Date:
                        <strong>June 2013 – February 2015 (1 year 9 months)
                        </strong>
                      </li>
                      <li>Skills used:
                        <strong>YII (PHP), MySQL, SVN
                        </strong>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-modal modal fade" id="experienceModal5" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Emotive (multiple projects)</h2>
                  <hr className="code-primary" />
                    <p>There's a number of really interesting projects that I took with emotive:</p>
                    <p><strong>Augmentin, dosage browser app:</strong>&nbsp;Using BackboneJS and UnderscoreJS, I built a Javascript based iPhone app for a client that manufactured a drug called Augmentin. It included user interaction feature in the style and design of a bathroom scale. A slider could be used to display dosage data in real time. The work was wrapped up in Cordova for over the air installations on iPhone and Android devices. It was intended as promotional material for doctors in support of the brand. My skills with Backbone were instrumental in providing a manageable and flexible framework for all the javascript dependancies of this project.</p>
                    <p><strong>CMS / Budget impact model API and Reporting:</strong>&nbsp;My skills and experience of SVG, Adobe and PHP allowed me to develop a mini infographic framework that could produce pixel perfect reports. I used PHP to populate SVG templates with data to manipulate the size and position of various chartable elements such as bar and pie charts. I worked closely with designers who supplied me with SVG from Adobe Illustrator to the desired technical specification, I was able to use these as templates to stage dynamic data to generate PDF files that could then be shared via email service that I built.</p>
                    <p><strong>Multistore:</strong>&nbsp;I was the lead developer when I hacked a copy of OpenCart for this pharmaceutical company. It was used to populate a custom built eDetailer app on iPads. It was the web service that synchronised the product catalogue and received packages of information from the user. The user would be able to browse, select and then progress with a request as a shopper would on a site under a checkout model - similar that of an Ecommerce website. There was heavy customisation on this with lots of collaboration with content owners and the app developer. It was a very cathartic and enjoyable experience.</p>
                    <ul className="list-inline item-details">
                      <li>Agency:
                        <strong>GOC
                        </strong>
                      </li>
                      <li>Clients:
                        <strong>Eylea, Bayer, Sativex, EMD Serono
                        </strong>
                      </li>
                      <li>Date:
                        <strong>June 2013 – February 2015 (1 year 9 months)
                        </strong>
                      </li>
                      <li>Skills used:
                        <strong>Angular JS, BackboneJS, RequireJS, UnderscoreJS, Cordova (Phone Gap), Wordpress, OpenCart, MySQL, Google API, SVN
                        </strong>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-modal modal fade" id="experienceModal6" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="modal-content">
          <div className="close-modal" data-dismiss="modal">
            <div className="lr">
              <div className="rl">
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="modal-body">
                  <h2>Splash</h2>
                  <hr className="code-primary" />
                    <p>I've undertaken a number of projects with Splash, these have all been excellent exercises for my technical development skills.</p>
                    <p>
                      The first piece of work as built around a spreadsheet reader. A user could upload a file via the interface that I designed which was then processed in the API that I built. There was some work flow process built around the results that were presented shortly afterwards. I've since learned that the tool is a large success, resulting in the saving of time and money.</p>
                    <p>
                      Using my platform integration skills, I was able to connect an hybrid CRM and content system to a third party service that provides translations. There was a large and workflow process to which the solution needed to support. Due to the test driven nature of the project, many new features could be built to make the process more efficient.</p>
                    <p>
                      Another recent project involved a similar integration, this was with a dynamic email composer. It was a mixture of PHP and NodeJS with an ExpressJS backend. I really enjoyed expanding a good piece of software and seeing it enclosed within the clients software when it was completed.</p>
                    <ul className="list-inline item-details">
                      <li>Client:
                        <strong>splash
                        </strong>
                      </li>
                      <li>Date:
                        <strong>January 2016 - Present
                        </strong>
                      </li>
                      <li>Skills used:
                        <strong>Yii (PHP), HTML, CSS, PHPExcel, Composer, GIT
                        </strong>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
