import React from "react";
import { MainPicture } from "../components/MainPicture";
import { Footer } from "../components/Footer";

export const MainPage = () => {
  return (
    <>
      <MainPicture photographer="Foto: Nils Dittrich/NTNUI"/>
      <Footer/>
    </>
  );
};

export default MainPage;
