import { useStore } from '@src/store/useStore';
import React from 'react';
import { Link } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
interface Props {
  className: string;
}
export const Header = (props: Props) => {
  const { className } = props;
  // const color = useStore.use.color();
  // const setColor = useStore.use.setColor();
  const [color, setColor] = useStore((state) => [state.color, state.setColor], shallow);
  console.log('Header render');
  return (
    <div className={className}>
      <div style={{ display: 'flex', gap: 8 }}>
        <Link to="/home">home</Link>
        <Link to="/home/washroom">washroom</Link>

        <Link to="/about">about</Link>
        <Link to="/about/resume">resume</Link>
        <button onClick={() => setColor('green')}>green</button>
        <button onClick={() => setColor('red')}>red</button>
        {color}
      </div>
    </div>
  );
};
