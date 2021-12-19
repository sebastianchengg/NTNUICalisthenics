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
          name={"Sebastian Cheng"}
          boardTitle={"Leader"}
          about={
            "As leader I have the main responsibility of all the group's activities and coordinate the work of the board. I also represent the group externally and I am the link to NTNUI's main board."
          }
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-deputy"
          direction={"left"}
          name={"Anita Hundseid"}
          boardTitle={"Deputy"}
          about={"As deputy I am the right hand of the leader and assist in the oragnization of the group. I am the main contactperson of the trainers and contribute in other administrative tasks."}
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-treasurer"
          direction={"right"}
          name={"Daniel Fremming"}
          boardTitle={"Treasurer"}
          about={"As treasurer I have the responsibility of the group's economy. This involves setting up budgets for the group's acitivties and controlling our expenses."}
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-social-responsible-1"
          direction={"left"}
          name={"Sven Thorkildsen"}
          boardTitle={"Social responsible"}
          about={"As social responsible I work tightly with Louise to organize the social events. This includes bigger events such as our training camp to Spain, but also more lowkey events such as parties or food after training."}
          favoriteExercise={"Front lever"}
        />
        <Boardcomponent
          url="image-social-responsible-2"
          direction={"right"}
          name={"Louise Brose"}
          boardTitle={"Social responsible"}
          about={"As social responsible I work tightly with Sven to organize the social events. I also have the main resposibility of our social media such as Instragram and Facebook."}
          favoriteExercise={"Front lever"}
        />
      </div>
    </>
  );
};

export default Board;
