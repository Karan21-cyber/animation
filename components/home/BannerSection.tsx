import React from "react";
import { ImageSection } from "./ImageSection";

export const BannerSection = () => {
  return (
    <>
      {["/home/banner.jpg", "/home/banner2.jpg", "/home/banner3.jpg"].map(
        (item, index) => (
          <ImageSection key={index} src={item} />
        )
      )}
    </>
  );
};
