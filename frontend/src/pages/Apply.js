import React from "react";
import { TextSection } from "../components/TextSection";
import { HalfPicture } from "../components/BackgroundPicture";
import { LinkButtonOutside } from "../components/LinkButton";
import Grid from "@material-ui/core/Grid";
import "./../App.css";

export const Apply = () => {
  return (
    <>
      <HalfPicture
        url="url-4"
        photographer="Foto: Nils Dittrich/NTNUI"
        titleText="Apply"
      />
      <div className="page">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextSection
              title="Apply for membership"
              text={
                "We're always looking for people who are motivated. " +
                "Each semester we invite new members from total beginners, " +
                "to people with years of experience. If you want to join one " +
                "of the best communities NTNUI has to offer and at the same time " +
                "get stronger, this is the group for you. Send us an application!"
              }
            />

            <LinkButtonOutside
              buttonStyle="btn-primary"
              buttonSize="btn-large"
              extraCss="apply-here"
              href="https://forms.gle/CZCejMfFd5nSGVAs8"
              target="_blank"
            >
              Apply here
            </LinkButtonOutside>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextSection
              title="Important!"
              text={
                "Every semester we send an email to everyone on the waiting list to " +
                "confirm if you want to stay on it not. This email might end up in your " +
                "garbage mail so it's extremely important that you check it from " +
                "time to time. If you don't answer this email you'll be taken off " +
                "the waiting list. We'll post on our Facebook page every time " +
                "such an email is sent, so we recommend that you like it to "+
                "avoid this from happening."
              }
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Apply;
