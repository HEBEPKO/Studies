import { hot } from "react-hot-loader/root";
import * as React from "react";
import * as styles from "./header.css";

function HeaderComponent() {
  console.log(styles, styles.exsample);
  return (
    <header className={styles.header}>
      <h1 className={styles.exsample}>Reedit for our own</h1>
      <p className={styles.title}>Привет 123</p>
    </header>
  );
}

export const Header = hot(HeaderComponent);