import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import Navbar from "../../navbar";

import styles from "./main-layout.module.css";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About us</title>
        <meta name="description" content="This is the home page!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default MainLayout;
