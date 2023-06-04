import { useStore } from '@src/store/useStore';
import React, { useEffect } from 'react';
interface Props {
  className: string;
}
export const SideNav = (props: Props) => {
  const { className } = props;
  const theme = useStore.use.theme();
  const setTheme = useStore.use.setTheme();
  useEffect(() => {
    console.log('SideNav');
  }, []);
  return (
    <div className={className}>
      SideNav
      <div>{theme}</div>
      <button onClick={() => setTheme('night')}>night</button>
      <button onClick={() => setTheme('day')}>day</button>
    </div>
  );
};
