

import React from "react";


export default function Divider(props) {

  return (
    <>
      <hr className="code-light" />
      <style jsx>{`
        .code-light,
        .code-primary {
            padding: 0;
            border: none;
            border-top: solid 5px;
            text-align: center;
            max-width: 250px;
            margin: 25px auto 30px;
        }
        .code-light:after,
        .code-primary:after {
            content: "\f121";
            font-family: "FontAwesome", Arial, sans-serif;
            display: inline-block;
            position: relative;
            top: -0.8em;
            font-size: 2em;
            padding: 0 0.25em;
        }
        .code-light {
            border-color: #fff;
        }
        .code-light:after {
            background-color: #16afb9;
            color: #fff;
        }
      `}</style>
    </>
  )
}
