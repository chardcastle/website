import React from 'react';
import PropTypes from 'prop-types';

function Divider(props) {
  const { type } = props;
  return (
    <>
      <hr className={type} />
      <style jsx>
        {`
        .line-primary,
        .line-default {
            padding: 0;
            border: none;
            border-top: solid 5px;
            text-align: center;
            max-width: 250px;
            margin: 25px auto 30px;
        }
        .line-primary:after {
            content: "\f121";
            font-family: "FontAwesome", Arial, sans-serif;
            display: inline-block;
            position: relative;
            top: -0.8em;
            font-size: 2em;
            padding: 0 0.25em;
        }
        .line-primary {
            border-color: #fff;
        }
        .line-primary:after {
            background-color: #16afb9;
            color: #fff;
        }
      `}
      </style>
    </>
  );
}

Divider.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Divider;
