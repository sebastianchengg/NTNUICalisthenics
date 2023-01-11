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
          about={
            "As Leader I have the overall responsibility of the entire group. " +
            "I handle external communication and lead the board meetings"
          }
          favoriteExercise={""}
          eMail={"calisthenics-leder@ntnui.no"}
        />
        <Boardcomponent
          url="image-deputy"
          direction={"left"}
          name={"Louise Brose"}
          boardTitle={"Deputy"}
          about={
            "As Deputy I assist the leader where it is needed and act as an extra " +
            "resource for the entire board"
          }
          favoriteExercise={""}
          eMail={"calisthenics-nestleder@ntnui.no"}
        />
        <Boardcomponent
          url="image-treasurer"
          direction={"right"}
          name={"Håkon Caspari"}
          boardTitle={"Treasurer"}
          about={
            "As Tresurer I handle all the financial tasks of the group. " +
            "I keep track of the economy, account the group's expenses and have control over the budget."
          }
          favoriteExercise={""}
          eMail={"calisthenics-kasserer@ntnui.no"}
        />
        <Boardcomponent
          url="image-social-responsible-1"
          direction={"left"}
          name={"Emilie Rieber"}
          boardTitle={"Social responsible"}
          about={
            "As Social responsible I work closely with the other social responsible " +
            "to create events and social gatherings for the group."
          }
          favoriteExercise={""}
        />
        <Boardcomponent
          url="image-social-responsible-2"
          direction={"right"}
          name={"Jan-Øivind Lima"}
          boardTitle={"Social responsible"}
          about={
            "As Social responsible I work closely with the other social responsible " +
            "to create events and social gatherings for the group. We have two social responsible " +
            "to create as good events as possible for our members."
          }
          favoriteExercise={""}
        />
      </div>
    </>
  );
};

export default Board;
