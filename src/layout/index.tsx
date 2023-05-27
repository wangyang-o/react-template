import React from "react";
import { Header } from "./Header";
import { SideNav } from "./SideNav";
import { Footer } from "./Footer";
import styles from "./index.module.scss";
interface Props {
  children?: React.ReactNode;
}
export const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Header></Header>
      <div>
        <SideNav></SideNav>
        <main>{children}</main>
      </div>
      <Footer></Footer>
    </div>
  );
};
