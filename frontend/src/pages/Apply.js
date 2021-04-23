import React from "react";
import { TextSection } from "../components/TextSection";
import { HalfPicture } from "../components/BackgroundPicture";
import { LinkButtonOutside } from "../components/LinkButton";
import "./../App.css";
import "./Apply.css";

export const Apply = () => {
  return (
    <>
      <HalfPicture url="url-4" photographer="Foto: Nils Dittrich/NTNUI" titleText="Apply" />
      <div className="page">
        <TextSection
          title="Apply for membership"
          text="We're always looking for people who are motivated. Each semester we invite new members from total beginners, to people with years of experience. If you want to join one of the best communities NTNUI has to offer and at the same time get stronger, this is the group for you. Send us an application!"
        />
        <LinkButtonOutside
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          extraCss="apply-here"
          href="https://forms.gle/CZCejMfFd5nSGVAs8"
          target="_blank"
        >
          Apply here
        </LinkButtonOutside>
      </div>
    </>
  );
};

export default Apply;
