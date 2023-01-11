import React, { useEffect, useState } from "react";
import { MainPicture } from "../components/BackgroundPicture";
import { LinkButton } from "../components/LinkButton";
import { TextSection } from "../components/TextSection";
import {
  InstagramLogo,
  FacebookLogo,
  MailLogo,
} from "../components/SocialLogos";
import Grid from "@material-ui/core/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Fade.css";
import "./MainPage.css";

export const MainPage = () => {
  const [mobile, setMobile] = useState();

  //Sets variable to define how many textsections are next to each other
  //to determine what animation to use
  const showMobile = () => {
    if (window.innerWidth < 600) {
      setMobile(1);
    } else if (window.innerWidth < 960) {
      setMobile(2);
    } else {
      setMobile(3);
    }
  };

  useEffect(() => {
    showMobile();
    Aos.init({ duration: 1000 });
  }, []);

  window.addEventListener("resize", showMobile);

  return (
    <>
      <MainPicture url="url-1" photographer="Foto: Nils Dittrich/NTNUI" />
      <div className="main-text fade-in">
        Master your own bodyweight
        <br />
        <LinkButton
          extraCss="apply-text"
          url="/apply"
          buttonStyle="btn-outline"
          buttonSize="btn-medium"
        >
          Apply now
        </LinkButton>
      </div>
      <div className="page overflow">
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-right"
            data-aos-once="true"
          >
            <TextSection
              title="Training hours"
              text={
                "(Trainings are for members only)\n\n" +
                "Tuesday:\t\t 14:00 - 16:00\n" +
                "Wednesday:\t 21:00 - 22:30\n" +
                "Friday:\t\t 19:30 - 21:30\n" +
                "Sunday:\t\t 19:15 - 21:00"
              }
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos={
              mobile === 3
                ? "fade-up"
                : mobile === 2
                ? "fade-left"
                : "fade-right"
            }
            data-aos-once="true"
          >
            <TextSection
              title="Address"
              text={"Båtsmannsgata 4, 7042 Trondheim"}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            data-aos={mobile === 3 ? "fade-left" : "fade-right"}
            data-aos-once="true"
          >
            <TextSection title="Contact">
              <InstagramLogo extraCss="contact-social contact-social-spacing" />
              <FacebookLogo extraCss="contact-social contact-social-spacing" />
              <MailLogo
                extraCss="contact-social"
                eMail={"calisthenics-leder@ntnui.no"}
              />
            </TextSection>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MainPage;
