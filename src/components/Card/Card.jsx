import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Card.module.css";
function Card(props) {
  return (
    <div>
      <div className={classes.cardItem}>
        <li className={classes.ListItem}>
          {props.text}
          <span className={classes.spanClass}>
            <FontAwesomeIcon
              onClick={() => {
                props.onDelete(props.id);
              }}
              className={classes.faicons}
              icon="trash"
            />
          </span>
        </li>
        <input type="checkbox"></input>
        <label>Sub-tasks</label>
      </div>
    </div>
  );
}
export default Card;

