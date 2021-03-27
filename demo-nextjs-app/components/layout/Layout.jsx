import Link from "next/link";
import React, { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <header>
        <Link href="/anouncements">anouncements</Link>
        <Link href="/contact">contact</Link>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
