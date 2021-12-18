import React from "react";
import { HalfPicture } from "../components/BackgroundPicture";
import { Boardcomponent } from "../components/BoardComponent";
import "./Board.css";
import "../App.css";

export const Board = () => {
  return (
    <>
      <HalfPicture url="url-2" titleText="The Board" />
      <div className="page board">
        <Boardcomponent
          url="image-leader"
          direction={"right"}
          name={"Sebastian Cheng"}
          boardTitle={"Leader"}
          about={
            "As leader I have the main responsibility of the group and coordinate the work of the board. I also represent the group externally."
          }
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-deputy"
          direction={"left"}
          name={"Anita Hundseid"}
          boardTitle={"Deputy"}
          about={"Main resposibility"}
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-treasurer"
          direction={"right"}
          name={"Daniel Fremming"}
          boardTitle={"Treasurer"}
          about={"Main resposibility"}
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-social-responsible-1"
          direction={"left"}
          name={"Sven Thorkildsen"}
          boardTitle={"Social responsible"}
          about={"Main resposibility"}
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-social-responsible-2"
          direction={"right"}
          name={"Louise Brose"}
          boardTitle={"Social responsible"}
          about={"Main resposibility"}
          favoriteExercise={"Front lever"}
        />
      </div>
    </>
  );
};

export default Board;
