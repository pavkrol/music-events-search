import React from "react";
import styles from "./Submit.module.scss";

const Submit = ({ name }) => (
  <button
    id={name === "search-artist" ? "submit-artist" : "submit-city"}
    className={styles.searchButton}
    type="submit"
    name={name === "search-artist" ? "submit-artist" : "submit-city"}
  />
);

export default Submit;
