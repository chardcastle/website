// // Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect} from 'react';


function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    window.jQuery = require('jquery/dist/jquery.min');
    window.bootstrap = require('react-bootstrap/dist/react-bootstrap.min');
    require('popper.js/dist/popper.min');


    // window.jQuery("#demo").diamonds({
    //   size : 100, // Size of diamonds in pixels. Both width and height.
    //   gap : 5, // Pixels between each square.
    //   hideIncompleteRow : false, // Hide last row if there are not enough items to fill it completely.
    //   autoRedraw : true, // Auto redraw diamonds when it detects resizing.
    //   itemSelector : `.${styles.item}` // the css selector to use to select diamonds-items.
    // });
  }, []);


  return (
    <Component {...pageProps} />
  );
};

export default MyApp
