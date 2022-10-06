import React, { useState } from "react";
import "../Styles/ProductImage.css";

const ProductImage = ({ images = [{ url: "" }] }) => {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div>
      <img src={mainImg.url} alt="main images" className="productMainImg" />

      <div className="imageFrame">
        {images.map((image, idx) => {
          return (
            <img
              src={image.url}
              alt="sub-images"
              key={idx}
              onClick={() => setMainImg(images[idx])}
              className={`${image.url === mainImg.url ? "activeImg" : null}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImage;
