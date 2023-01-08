import React from "react";
import { HalfPicture } from "../components/BackgroundPicture";
import { Boardcomponent } from "../components/BoardComponent";
import "./Fade.css";
import "../App.css";

export const Board = () => {
  return (
    <>
      <HalfPicture url="url-2" titleText="The Board" />
      <div className="page overflow">
        <Boardcomponent
          url="image-leader"
          direction={"right"}
          name={"Anita Hundseid"}
          boardTitle={"Leader"}
          about={""}
          favoriteExercise={""}
        />
        <Boardcomponent
          url="image-deputy"
          direction={"left"}
          name={"Louise Brose"}
          boardTitle={"Deputy"}
          about={""}
          favoriteExercise={""}
        />
        <Boardcomponent
          url="image-treasurer"
          direction={"right"}
          name={"Håkon Caspari"}
          boardTitle={"Treasurer"}
          about={""}
          favoriteExercise={""}
        />
        <Boardcomponent
          url="image-social-responsible-1"
          direction={"left"}
          name={"Emilie Rieber"}
          boardTitle={"Social responsible"}
          about={""}
          favoriteExercise={""}
        />
        <Boardcomponent
          url="image-social-responsible-2"
          direction={"right"}
          name={"Jan-Øivind Lima"}
          boardTitle={"Social responsible"}
          about={""}
          favoriteExercise={""}
        />
      </div>
    </>
  );
};

export default Board;
