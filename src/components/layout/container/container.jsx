import React from "react";
import styles from "./container.module.scss"

export const Container = (props) => {

    return <main className={styles.container}>
         {props.children}
    </main>
}