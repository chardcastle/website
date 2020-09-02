import React, { useState } from 'react';

class ScrollTop extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    const intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId });
  }

  render() {
    return (
      <button
        title="Back to top"
        className="scroll"
        onClick={() => { this.scrollToTop(); }}
      >
        <span className="arrow-up glyphicon glyphicon-chevron-up" />
      </button>
    );
  }
}

export default ScrollTop;
// import React, { useState } from 'react';
// import { FaArrowCircleUp } from 'react-icons/fa';
//
// const theWindow = (process.browser) ? window : undefined;
//
// const [showScroll, setShowScroll] = useState(false);
//
// function onScroll() {
//   console.log(`scrolling ${theWindow.pageYOffset}`);
//   if (!showScroll && theWindow.pageYOffset > 400) {
//     setShowScroll(true);
//   } else if (showScroll && theWindow.pageYOffset <= 400) {
//     setShowScroll(false);
//   }
// }
//
// theWindow.addEventListener('scroll', onScroll);
//
// export default function ScrollTop() {
//   const scrollTop = () => {
//     theWindow.scrollTo({ top: 0, behavior: 'smooth' });
//   };
//
//   return <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
// }

// import React, { useState } from 'react';
// import { FaArrowCircleUp } from 'react-icons/fa';
//
// const ScrollArrow = () => {
//   const [showScroll, setShowScroll] = useState(false);
//
//   const checkScrollTop = () => {
//     if (!showScroll && window.pageYOffset > 400) {
//       setShowScroll(true);
//     } else if (showScroll && window.pageYOffset <= 400) {
//       setShowScroll(false);
//     }
//   };
//
//   const scrollTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };
//
//   window.addEventListener('scroll', checkScrollTop);
//
//   return (
//     <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
//   );
// };

//
// export default ScrollArrow;

// import React, { useState } from 'react';
// import { FaArrowCircleUp } from 'react-icons/fa';
//
// /**
//  * Scroll to Top Button (Only visible on small and extra-small screen sizes)
//  */
// class Scroller extends React.Component {
//   constructor(props) {
//     super(props);
//
//     const [showScroll, setShowScroll] = useState(false);
//
//     this.state = { showScroll: false };
//   }
//
//   componentDidMount() {
//     // window.addEventListener('click', this.onClickOutsideHandler);
//     // using effect to access window object
//     const checkScrollTop = () => {
//       if (!this.showScroll && window.pageYOffset > 400) {
//         this.setShowScroll(true);
//       } else if (this.showScroll && window.pageYOffset <= 400) {
//         this.setShowScroll(false);
//       }
//     };
//
//     window.addEventListener('scroll', checkScrollTop);
//   }
//
//   render() {
//     const scrollTop = () => {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     };
//
//     return (
//       <FaArrowCircleUp
//         className="scrollTop"
//         onClick={scrollTop}
//         style={{ height: 40, display: this.state.showScroll ? 'flex' : 'none' }}
//       />
//       // <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
//       //   <a className="btn btn-primary" href="#page-top">
//       //     <i className="fa fa-chevron-up" />
//       //   </a>
//       // </div>
//     );
//   }
// }
//
// export default Scroller;
