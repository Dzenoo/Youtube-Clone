import React from "react";

import "./Layout.scss";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <main className="main">{props.children}</main>
    </div>
  );
};

export default Layout;
