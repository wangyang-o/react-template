import { useStore } from '@src/store/useStore';
import React from 'react';
interface Props {
  className: string;
}
export const SideNav = (props: Props) => {
  const { className } = props;
  const theme = useStore.use.theme();
  const setTheme = useStore.use.setTheme();
  console.log('SideNav render');
  return (
    <div className={className}>
      SideNav
      <div>{theme}</div>
      <button onClick={() => setTheme('night')}>night</button>
      <button onClick={() => setTheme('day')}>day</button>
    </div>
  );
};
