import React from "react";
import { Header } from "../components/layout/header/header";
import { Footer } from "../components/layout/footer/footer";
import { Container } from "../components/layout/container/container";
import styles from "./root.module.scss"

export const Root = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Container>page content</Container>
      <Footer />
    </div>
  );
};
