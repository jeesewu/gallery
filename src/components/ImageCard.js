import React from "react";

const ImageCard = (props) => {
  return (
    <img
      className="ui rounded image"
      style={{ marginTop: "10px" }}
      src={props.url}
      alt={props.alt}
    />
  );
};

export default ImageCard;
