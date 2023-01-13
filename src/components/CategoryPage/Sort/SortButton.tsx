import React from "react";
type props = { name: string };

const SortButton: React.FC<props> = ({ name }) => {
  return <button>{name}</button>;
};

export default SortButton;
