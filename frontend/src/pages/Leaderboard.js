import React from "react";
import { HalfPicture } from "../components/BackgroundPicture";
import Grid from "@material-ui/core/Grid";
import Table from "react-bootstrap/Table";

export const Leaderboard = () => {
  return (
    <>
      <HalfPicture
        url="url-6"
        photographer="Foto: Roland Richter/NTNUI"
        titleText="Leaderboard"
      />
      <div className="page">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Table striped variant="dark">
              <thead>
                <tr>
                  <th>Excersise</th>
                  <th>Name</th>
                  <th>Reps</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>

                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>

                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>

                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>

                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>
              </tbody>
            </Table>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Table striped variant="dark">
              <thead>
                <tr>
                  <th>Excersise</th>
                  <th>Name</th>
                  <th>Reps</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>

                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>

                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>

                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>

                <tr>
                  <td>Excersise</td>
                  <td>Name</td>
                  <td>Reps</td>
                </tr>
              </tbody>
            </Table>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Leaderboard;
