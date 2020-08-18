
import debug from 'debug';
debug('Running index page');

// TODO Possible styles usage?
// <div className={styles.container}>

const Index = () => (
    // Navigation
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header page-scroll">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#page-top">Chris Hardcastle</a>
        </div>

        {/* Collect the nav links, forms, and other content for toggling  */}
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li className="hidden">
              <a href="#page-top"></a>
            </li>
            <li className="page-scroll">
              <a href="#about">About</a>
            </li>
            <li>
              <a href="cv/chris-hardcastle-cv.pdf" target="_blank">CV (PDF)</a>
            </li>
            <li className="page-scroll">
              <a href="#experience">Experience</a>
            </li>
            <li className="page-scroll">
              <a href="#stack">Technologies</a>
            </li>
            <li className="page-scroll">
              <a href="#services">Services</a>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container-fluid */}
    </nav>
);

export default Index;

