import React from "react";
import { HalfPicture } from "../components/BackgroundPicture";
import { TextSection } from "../components/TextSection";
import "../App.css";

export const About = () => {
  return (
    <>
      <HalfPicture
        url="url-2"
        photographer="Foto: Nils Dittrich/NTNUI"
        titleText="About"
      />
      <div className="page">
        <TextSection
          title="What is calisthenics?"
          text={
            'Calisthenics, also known as "street workout", is a form of ' +
            "strength training consisting of only bodyweight excersises. " +
            "There's no need for fancy or expensive equipment, we do all our " +
            "excersises with just our bodyweight as resistance."
          }
        />
        <TextSection
          title="Who are we?"
          text={
            "We are a group for students and employees at NTNU that loves " +
            "strength training and wants to practice calisthenics with " +
            "like-minded people. If you're looking for a group that loves " +
            "strength training and having fun at the same time, this group " +
            "is perfect for you. We set up our workouts so that people at " +
            "every level will be able to learn and develop their skills."
          }
        />
        <TextSection
          title="Social activities"
          text={
            "Every semester we arrange a variety of social activities. " +
            "We organize get to know eachother parties for new members, " +
            "different workshops, out of town activites, general assembly " +
            "parties and lastly our yearly training camp to southern Europe " +
            "in the spring. In addition smaller social happenings throughout " +
            "the semesters such as food after training, movie nights at the " +
            "gym and lots more."
          }
        />
      </div>
    </>
  );
};

export default About;
