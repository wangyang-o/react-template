import React from 'react';
interface Props {
  className: string;
}
export const Footer = (props: Props) => {
  const { className } = props;
  return <div className={className}>Footer</div>;
};
