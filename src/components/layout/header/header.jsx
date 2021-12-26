import React from "react";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.menu}>
          <div className={styles.btns}>
            <button className={styles.lang}>RU</button>
            <span> | </span>
            <button className={styles.lang}>UA</button>
          </div>

          <ul className={styles.list}>
            <li className={styles.item}>
              {" "}
              <a className={styles.link} href="#">Контакты</a>{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <a className={styles.link} href="#">Новости</a>{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <a className={styles.link} href="#">Помощь</a>{" "}
            </li>
            <li className={styles.item}>
              {" "}
              <a className={styles.link} href="#">Партнерская программа</a>{" "}
            </li>
          </ul>
        </div>
        <div className={styles.log}>
          <button className={styles.btn}>Зарегистрируйтесь</button> или{" "}
          <button className={styles.btn}>Войдите</button> в личный кабинет
        </div>
      </div>
    </header>
  );
};
