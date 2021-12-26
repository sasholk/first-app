import React from "react";

import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.name}>© Интернет-магазин</div>
      </div>
    </footer>
  );
};
