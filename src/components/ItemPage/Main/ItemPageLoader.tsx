import React from "react";
import ContentLoader from "react-content-loader";

const ItemPageLoader = () => (
  <ContentLoader
    speed={2}
    width={224}
    height={366}
    viewBox="0 0 224 366"
    backgroundColor="#ffffff"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="224" height="340" />
    <rect x="0" y="345" rx="0" ry="0" width="101" height="13" />
    <rect x="0" y="360" rx="0" ry="0" width="36" height="13" />
  </ContentLoader>
);

export default ItemPageLoader;
