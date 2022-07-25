import { FC, PropsWithChildren } from "react";
import styles from "./dark-layout.module.css";

const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <h3>Dark Layout</h3>
      {children}
    </div>
  );
};

export default DarkLayout;
