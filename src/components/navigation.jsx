import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import cx from 'classnames';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import styles from './navigation.module.css';
import globalStyles from './global.module.css';
import content from '../content';
import constants from '../constants';

export default function Navigation() {
  const [selectedLink, setSelectedLink] = useState('');

  return (
    <Container>
      <Navbar className={cx(styles.navBarAppCustom, styles.bg)} collapseOnSelect fixed="top" expand="md" variant="dark">
        <Navbar.Brand href="#home" className={cx(globalStyles.title, globalStyles.styledFont, styles.navBarBrand)}>
          {content.appTitle}
        </Navbar.Brand>
        <Navbar.Toggle className={styles.appNavBarToggle} aria-controls="responsive-navbar-nav">
          <GiHamburgerMenu color="white" size="1.5em" />
        </Navbar.Toggle>
        <Navbar.Collapse id="x" className={styles.appSubNavBar}>
          <Nav className={cx(styles.appSubNavBarInner, 'ml-auto')}>
            <Nav.Link
              onSelect={() => setSelectedLink(constants.NAV_ABOUT)}
              href="#about"
              className={cx(selectedLink === constants.NAV_ABOUT ? styles.activeLink : '', styles.appNavLink)}
            >
              <span className={styles.appNavLinkInner}>{content.titleAbout}</span>
            </Nav.Link>
            <Nav.Link href="/cv/chris-hardcastle-cv.pdf" target="_blank">
              <span className={styles.appNavLinkInner}>{content.titleCvPDF}</span>
            </Nav.Link>
            <Nav.Link
              onSelect={() => setSelectedLink('experience')}
              href="#experience"
              className={cx(selectedLink === 'experience' ? styles.activeLink : '', styles.appNavLink)}
            >
              <span className={styles.appNavLinkInner}>{content.titleExperience}</span>
            </Nav.Link>
            <Nav.Link
              onSelect={() => setSelectedLink(constants.NAV_TECHNOLOGIES)}
              href="#stack"
              className={cx(selectedLink === constants.NAV_TECHNOLOGIES ? styles.activeLink : '', styles.appNavLink)}
            >
              <span className={styles.appNavLinkInner}>{content.titleTechnologies}</span>
            </Nav.Link>
            <Nav.Link
              onSelect={() => setSelectedLink(constants.NAV_SERVICES)}
              href="#services"
              className={cx(selectedLink === constants.NAV_SERVICES ? styles.activeLink : '', styles.appNavLink)}
            >
              <span className={styles.appNavLinkInner}>{content.titleServices}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
