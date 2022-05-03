import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <Link className="link" to="/">
        00 Hello world
      </Link>
      <Link className="link" to="/01-dom-update">
        01 DOM Update
      </Link>
      <Link className="link" to="/02-handling-css">
        02 HandlingCSS
      </Link>
      <Link className="link" to="/03-reactive-code">
        03 Reactive Code
      </Link>
      <Link className="link" to="/04-life-cycle">
        04 Life Cycle
      </Link>
      <Link className="link" to="/05-async-callback">
        05 Async Callback
      </Link>
      <Link className="link" to="/06-conditional-rendering">
        06 Conditional Rendering
      </Link>
      <Link className="link" to="/07-common-data">
        07 Common Data
      </Link>
      <Link className="link" to="/08-context">
        08 Context
      </Link>
      <Link className="link" to="/09-data-load">
        09 Data Load
      </Link>
    </nav>
  );
};
