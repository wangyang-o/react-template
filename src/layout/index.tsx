import React from 'react';
import { Header } from './Header';
import { SideNav } from './SideNav';
import { Footer } from './Footer';
import styles from './index.module.scss';
import { useStore } from '@src/store/useStore';
import classNames from 'classnames';

interface Props {
  children?: React.ReactNode;
}
export const Layout = (props: Props) => {
  const { children } = props;
  const [headerActive, sideNavActive] = useStore((state) => [state.headerActive, state.sideNavActive]);
  return (
    <div className={styles.layout}>
      {headerActive && <Header className={styles.header}></Header>}
      <div className={styles.bodyContainer}>
        <SideNav className={classNames(styles.sideNav, { [styles.hidden]: !sideNavActive })}></SideNav>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer className={styles.footer}></Footer>
    </div>
  );
};
