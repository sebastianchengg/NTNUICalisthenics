import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import "./BoardComponent.css";

export const Boardcomponent = ({
  url,
  name,
  boardTitle,
  about,
  favoriteExercise,
  direction
}) => {
    const [side, setSide] = useState("");

    useEffect(() => {
        if (direction == "left"){
            setSide("-reverse")
        }
        Aos.init({ duration: 1000})
    }, [])

  return (
    <>
      <div data-aos={`fade-${direction}`} data-aos-once="true">
        <Grid container direction={`row${side}`}>
          <Grid item xs={12} sm={6} md={5} lg={4}>
            <div className={`board-image ${url}`} />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            <div>{name}</div>
            <div>{boardTitle}</div>
            <div>{about}</div>
            <div>{favoriteExercise}</div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
