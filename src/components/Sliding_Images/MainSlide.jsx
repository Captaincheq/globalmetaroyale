import React from "react";
import SlidingPictures from "./SlidingPictures";
import {blog01, blog02, blog03, blog04, blog05} from './imports';

const MainSlide = () => {
  const images = [
    blog01, 
    blog02, 
    blog03, 
    blog04, 
    blog05
    // Add more image URLs here
  ];

  return (
    <div>
      <SlidingPictures images={images} />
    </div>
  );
};

export default MainSlide;
