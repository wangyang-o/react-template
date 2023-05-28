import React from "react";
interface Props {
  className: string;
}
export const SideNav = (props: Props) => {
  const { className } = props;
  return <div className={className}>SideNav</div>;
};
