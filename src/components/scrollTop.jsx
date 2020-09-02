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

    if (window.pageYOffset === 0) {
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
      <>
        <Button
          className={styles.scroll}
          style={{ display: isVisible ? 'flex' : 'none' }}
          onClick={() => { this.scrollToTop(); }}
        >
          <FaArrowCircleUp className="scrollTop" style={{ height: 40 }} />
        </Button>
      </>
    );
  }
}

ScrollTop.propTypes = {
  delayInMs: PropTypes.number.isRequired,
  scrollStepInPx: PropTypes.number.isRequired,
  isVisible: PropTypes.func.isRequired,
};

export default ScrollTop;
