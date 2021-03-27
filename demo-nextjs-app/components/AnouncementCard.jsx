import React from "react";
import classes from "./anouncement-card.module.css";
import Button from "./common/Button";

function AnouncementCard({ title, link }) {
  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
      <Button link={link}>click me</Button>
    </div>
  );
}

export default AnouncementCard;
