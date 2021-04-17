import React from "react";

import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        url={image.urls.regular}
        alt={image.alt_description}
      />
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
