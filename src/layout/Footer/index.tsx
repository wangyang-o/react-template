import { useStore } from '@src/store/useStore';
import React from 'react';
interface Props {
  className: string;
}
export const Footer = (props: Props) => {
  const { className } = props;
  const headerActive = useStore.use.headerActive();
  const setHeaderActive = useStore.use.setHeaderActive();
  const sideNavActive = useStore.use.sideNavActive();
  const setSideNavActive = useStore.use.setSideNavActive();
  console.log('footer render');
  return (
    <div className={className}>
      <div>footer</div>
      <button onClick={() => setHeaderActive(!headerActive)}> 切换header</button>
      <button onClick={() => setSideNavActive(!sideNavActive)}> 切换sideNav</button>
    </div>
  );
};
