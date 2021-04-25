import React from "react";
import { MainPicture } from "../components/BackgroundPicture";
import { LinkButton } from "../components/LinkButton";
import { TextSection } from "../components/TextSection";
import { InstagramLogo, FacebookLogo, MailLogo } from "../components/SocialLogos";
import Grid from "@material-ui/core/Grid";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <>
      <MainPicture url="url-1" photographer="Foto: Nils Dittrich/NTNUI" />
      <div className="main-text fade-in">
        Master your own bodyweight
        <br />
        <LinkButton
          extraCss="apply-text"
          url="/apply"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
        >
          Apply now
        </LinkButton>
      </div>
      <div className="page">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <TextSection
              title="Training hours"
              text={
                "(Trainings are for members only)\n\n" +
                "Wednesday:\t 20:15 - 22:00\n" +
                "Friday:\t\t 19:15 - 21:00\n" +
                "Sunday:\t\t 19:15 - 21:00"
              }
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextSection
              title="Address"
              text={"Båtsmannsgata 4, 7042 Trondheim"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TextSection
              title="Contact"
            >
                <InstagramLogo extraCss="contact-social contact-social-spacing" />
                <FacebookLogo extraCss="contact-social contact-social-spacing" />
                <MailLogo extraCss="contact-social"/>
            </TextSection>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MainPage;
