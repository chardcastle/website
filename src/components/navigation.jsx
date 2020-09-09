import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import styles from './navigation.module.css';
import globalStyles from './global.module.css';
import content from '../content';
import constants from '../constants';

export default function Navigation() {
  const [selectedLink, setSelectedLink] = useState('');
  let {
    aboutSelected, experienceSelected, techSelected, servicesSelected,
  } = '';

  if (selectedLink === constants.NAV_ABOUT) {
    aboutSelected = styles.activeLink;
  }

  if (selectedLink === constants.NAV_SERVICES) {
    servicesSelected = styles.activeLink;
  }

  if (selectedLink === constants.NAV_EXPERIENCE) {
    experienceSelected = styles.activeLink;
  }

  if (selectedLink === constants.NAV_TECHNOLOGIES) {
    techSelected = styles.activeLink;
  }
  return (
    <Container>
      <style jsx>
        {`
          .navbar { padding: 0; }
          .navbar-brand { padding-left: 1em; }
        `}
      </style>
      <Navbar className={`${styles.navBarAppCustom}, ${styles.bg}`} collapseOnSelect fixed="top" expand="md" variant="dark">
        <Navbar.Brand href="#home" className={`${globalStyles.styledFont} ${styles.navBarBrand}`}>
          {content.appTitle}
        </Navbar.Brand>
        <Navbar.Toggle className={styles.appNavBarToggle} aria-controls="responsive-navbar-nav">
          <GiHamburgerMenu color="white" size="1.5em" />
        </Navbar.Toggle>

        <Navbar.Collapse id="x" className={styles.appSubNavBar}>
          <Nav className="ml-auto">
            <Nav.Link
              onSelect={() => setSelectedLink(constants.NAV_ABOUT)}
              href="#about"
              className={`${styles.appNavLink} ${aboutSelected}`.trim()}
            >
              <span className={styles.appNavLinkInner}>{content.titleAbout}</span>
            </Nav.Link>
            <Nav.Link href="/cv/chris-hardcastle-cv.pdf" target="_blank">
              <span className={styles.appNavLinkInner}>{content.titleCvPDF}</span>
            </Nav.Link>
            <Nav.Link
              onSelect={() => setSelectedLink('experience')}
              href="#experience"
              className={`${styles.appNavLink} ${experienceSelected}`.trim()}
            >
              <span className={styles.appNavLinkInner}>{content.titleExperience}</span>
            </Nav.Link>
            <Nav.Link
              onSelect={() => setSelectedLink(constants.NAV_TECHNOLOGIES)}
              href="#stack"
              className={`${styles.appNavLink} ${techSelected}`.trim()}
            >
              <span className={styles.appNavLinkInner}>{content.titleTechnologies}</span>
            </Nav.Link>
            <Nav.Link
              onSelect={() => setSelectedLink(constants.NAV_SERVICES)}
              href="#services"
              className={`${styles.appNavLink} ${servicesSelected}`.trim()}
            >
              <span className={styles.appNavLinkInner}>{content.titleServices}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
