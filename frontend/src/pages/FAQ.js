import React from "react";
import { FAQComponent } from "../components/FAQComponent";
import { HalfPicture } from "../components/BackgroundPicture";

export const FAQ = () => {
  return (
    <>
      <HalfPicture
        url="url-3"
        photographer="Foto: Nils Dittrich/NTNUI"
        titleText="FAQ"
      />
      <FAQComponent />
    </>
  );
};

export default FAQ;
