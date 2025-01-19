import React from "react";
import styles from "./index.module.css";
import { Header } from "../header";

type Props = {
  children: React.ReactNode;
};
type FlexProps = {
  children: React.ReactNode;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{padding: '48px 0px'}}><Container>{children}</Container></main>
    </>
  );
};

export const Container: React.FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export const FlexContainer: React.FC<FlexProps> = ({
  children,
  alignItems = "center",
  justifyContent = "space-between",
  gap,
}) => {
  return (
    <div className={styles.flex} style={{ alignItems, justifyContent, gap }}>
      {children}
    </div>
  );
};
