/* eslint-disable no-undef */
// Window object is undefined in code but is available via useEffect() which runs in browser only
import { FaArrowCircleUp } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './scrollTop.module.css';

class ScrollTop extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    const { intervalId } = this.state;
    const { scrollStepInPx } = this.props;

    if (typeof window !== 'undefined' && window.pageYOffset === 0) {
      clearInterval(intervalId);
    }

    window.scroll(0, window.pageYOffset - scrollStepInPx);
  }

  scrollToTop() {
    const { delayInMs } = this.props;
    const intervalId = setInterval(this.scrollStep.bind(this), delayInMs);
    this.setState({ intervalId });
  }

  render() {
    const { isVisible } = this.props;

    return (
      <div className={styles.scroll} style={{ display: isVisible ? 'flex' : 'none' }}>
        <Button
          variant="secondary"
          onClick={() => { this.scrollToTop(); }}
          size="sm"
          href="#"
        >
          <FaArrowCircleUp size="2em" />
        </Button>
      </div>
    );
  }
}

ScrollTop.propTypes = {
  delayInMs: PropTypes.number.isRequired,
  scrollStepInPx: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ScrollTop;
