import Link from "next/link";
import classes from "./button.module.css";

import React from "react";

function Button({ link, children }) {
  return (
    <Link href={link}>
      <a className={classes.link}>{children}</a>
    </Link>
  );
}

export default Button;
