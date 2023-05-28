import React from 'react';
import { Header } from './Header';
import { SideNav } from './SideNav';
import { Footer } from './Footer';
import styles from './index.module.scss';

interface Props {
  children?: React.ReactNode;
}
export const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Header className={styles.header}></Header>
      <div className={styles.bodyContainer}>
        <SideNav className={styles.sideNav}></SideNav>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer className={styles.footer}></Footer>
    </div>
  );
};
