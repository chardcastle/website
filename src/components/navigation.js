import styles from './navigation.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect className={styles.bg} expand="lg" variant="dark">
      <Navbar.Brand href="#home">Chris Hardcastle</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="/cv/chris-hardcastle-cv.pdf" target="_blank">CV (PDF)</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
//
// import styles from './navigation.module.css';
// import Container from 'react-bootstrap/Container';
//
// var classNames = require('classnames');
//
//
// const navigationClasses = classNames(styles.navbar, styles.navbarDefault, styles.navbarFixedTop);
// const navBrandClasses = classNames(styles.navBar);
//
//
// export default function Navigation() {
//   return (
//     // Navigation
//     <nav className="navbar navbar-default navbar-fixed-top">
//       <Container>
//         {/* Brand and toggle get grouped for better mobile display */}
//         <div className="navbar-header page-scroll">
//           <button type="button" className="navbar-toggle" data-toggle="collapse"
//                   data-target="#bs-example-navbar-collapse-1">
//             <span className="sr-only">Toggle navigation</span>
//             <span className="icon-bar" />
//             <span className="icon-bar" />
//             <span className="icon-bar" />
//           </button>
//           <a className={styles.navbarBrand} href="#page-top">Chris Hardcastle</a>
//         </div>
//
//         {/* Collect the nav links, forms, and other content for toggling  */}
//         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//           <ul className="nav navbar-nav navbar-right">
//             <li className="hidden">
//               <a href="#page-top"></a>
//             </li>
//             <li className="page-scroll">
//               <a href="#about">About</a>
//             </li>
//             <li>
//               <a href="cv/chris-hardcastle-cv.pdf" target="_blank">CV (PDF)</a>
//             </li>
//             <li className="page-scroll">
//               <a href="#experience">Experience</a>
//             </li>
//             <li className="page-scroll">
//               <a href="#stack">Technologies</a>
//             </li>
//             <li className="page-scroll">
//               <a href="#services">Services</a>
//             </li>
//           </ul>
//         </div>
//         {/* /.navbar-collapse */}
//       </Container>
//       {/* /.container-fluid */}
//     </nav>
//   )
// }
