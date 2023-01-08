import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BoardComponent.css";

//Component used for board members
export const Boardcomponent = ({
  url,
  name,
  boardTitle,
  about,
  favoriteExercise,
  direction,
}) => {
  const [side, setSide] = useState("");
  const [mobile, setMobile] = useState();

  //Sets variable to define if mobile-layout is needed
  const showMobile = () => {
    if (window.innerWidth < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  //Decides the order of the image and text and sets the animation duration
  useEffect(() => {
    showMobile();
    if (direction === "left") {
      setSide("-reverse");
    }
    Aos.init({ duration: 1000 });
  }, [direction]);

  window.addEventListener("resize", showMobile);

  return (
    <>
      <div
        className="profile-container"
        data-aos={mobile ? "fade-right" : `fade-${direction}`}
        data-aos-once="true"
      >
        <Grid container direction={`row${side}`} justifyContent="center">
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <div className={`board-image ${url}`} />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <div
              className={mobile ? "info-container-mobile" : "info-container"}
            >
              <p className="name">{name}</p>
              <p className="board-title">{boardTitle}</p>
              {about && <p className="about">{about}</p>}
              {favoriteExercise && (
                <p className="favorite-exercise">
                  <span className="favorite-text">Favorite exercise: </span>
                  {favoriteExercise}
                </p>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
