import React from "react";
import { HalfPicture } from "../components/BackgroundPicture";
import { RepLeaderBoard, DurationLeaderboard } from "../components/Tables";
import { TextSection } from "../components/TextSection";
import Grid from "@material-ui/core/Grid";

export const Leaderboard = () => {
  return (
    <>
      <HalfPicture
        url="url-6"
        photographer="Foto: Roland Richter/NTNUI"
        titleText="Leaderboard"
      />
      <div className="page">
        <TextSection
          title="Leaderboard"
          text="Every semester our group has one or more test days so everyone can check their max reps and max holds on different exercises. These are our all-time best results."
        />

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <TextSection title="Repetition-based" />
            <RepLeaderBoard />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextSection title="Duration-based" />
            <DurationLeaderboard />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Leaderboard;
