import React from "react";
import { HalfPicture } from "../components/BackgroundPicture";
import { Boardcomponent } from "../components/BoardComponent";
import { TextSection } from "../components/TextSection";
import Grid from "@material-ui/core/Grid";
import "../App.css";

export const Board = () => {
  return (
    <>
      <HalfPicture url="url-2" titleText="Board" />
      <div className="page">
        <TextSection
          title="The board"
          text="These are the dedicated people that run the group"
        />
        <Boardcomponent
          url="image-leader"
          direction={"left"}
          name={"Sebastian Cheng"}
          boardTitle={"Leader"}
          about={"Main resposibility"}
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-leader"
          direction={"right"}
          name={"Sebastian Cheng"}
          boardTitle={"Leader"}
          about={"Main resposibility"}
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-leader"
          direction={"left"}
          name={"Sebastian Cheng"}
          boardTitle={"Leader"}
          about={"Main resposibility"}
          favoriteExercise={"Front lever"}
        />
      </div>
    </>
  );
};

export default Board;
