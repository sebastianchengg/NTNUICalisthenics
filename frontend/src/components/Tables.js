import React from "react";
import Table from "react-bootstrap/Table";
import "./Tables.css";

//Component for a table head
const TableHead = ({ type }) => {
  return (
    <thead>
      <tr>
        <th className="table-separate">Exercise</th>
        <th className="table-separate">Male</th>
        <th className="table-separate">{type}</th>
        <th className="table-separate">Female</th>
        <th>{type}</th>
      </tr>
    </thead>
  );
};

//Component for a table row
const TableRow = ({
  exercise,
  maleName,
  maleResult,
  femaleName,
  femaleResult,
}) => {
  return (
    <tr>
      <td className="table-separate">{exercise}</td>
      <td className="table-separate">{maleName}</td>
      <td className="table-separate">{maleResult}</td>
      <td className="table-separate">{femaleName}</td>
      <td>{femaleResult}</td>
    </tr>
  );
};

//Component used in leaderboard page
export const RepLeaderBoard = () => {
  return (
    <Table striped bordered responsive variant="dark">
      <TableHead type="Reps" />
      <tbody>
        <TableRow
          exercise="Handstand push-ups"
<<<<<<< HEAD
          maleName="Sondre"
          maleResult="18"
          femaleName="Ellen"
=======
          maleName="Sven T."
          maleResult="11"
          femaleName="Ellen A."
>>>>>>> 4b18287b234a1d58d8ef1414c7a2d0114988c83d
          femaleResult="1"
        />
        <TableRow
          exercise="π/2 Handstand push-ups"
<<<<<<< HEAD
          maleName="Sondre"
          maleResult="9"
=======
          maleName="Sven T."
          maleResult="5"
>>>>>>> 4b18287b234a1d58d8ef1414c7a2d0114988c83d
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Push-ups"
<<<<<<< HEAD
          maleName="Sebastian"
          maleResult="104"
          femaleName="Anita"
=======
          maleName="Sebastian C."
          maleResult="104"
          femaleName="Anita H."
>>>>>>> 4b18287b234a1d58d8ef1414c7a2d0114988c83d
          femaleResult="62"
        />
        <TableRow
          exercise="Muscle-ups bar"
          maleName="Elek B."
          maleResult="12"
<<<<<<< HEAD
          femaleName="Anita"
          femaleResult="5"
=======
          femaleName="Louise B."
          femaleResult="4"
>>>>>>> 4b18287b234a1d58d8ef1414c7a2d0114988c83d
        />
        <TableRow
          exercise="Muscle-ups rings"
          maleName="Aleksander V."
          maleResult="9"
          femaleName="Amaleen J."
          femaleResult="6"
        />
        <TableRow
          exercise="Pull-ups"
          maleName="Sebastian C."
          maleResult="32"
<<<<<<< HEAD
          femaleName="Anita"
=======
          femaleName="Anita H."
>>>>>>> 4b18287b234a1d58d8ef1414c7a2d0114988c83d
          femaleResult="22"
        />
        <TableRow
          exercise="Dips"
          maleName="Sebastian C."
          maleResult="65"
          femaleName="Louise B."
          femaleResult="31"
        />
        <TableRow
          exercise="Dragon flags"
          maleName="Kristoffer S."
          maleResult="25"
          femaleName="Gunhild"
          femaleResult="1"
        />
        <TableRow
          exercise="Pistol squats"
          maleName="Peter H."
          maleResult="69"
<<<<<<< HEAD
          femaleName="Anita"
=======
          femaleName="Anita H."
>>>>>>> 4b18287b234a1d58d8ef1414c7a2d0114988c83d
          femaleResult="83"
        />
        <TableRow
          exercise="Toes to bar"
          maleName="Andreas K."
          maleResult="34"
          femaleName="Solveig B."
          femaleResult="34"
        />
      </tbody>
    </Table>
  );
};

//Component used in leaderboard page
export const DurationLeaderboard = () => {
  return (
    <Table striped bordered responsive variant="dark">
      <TableHead type="Hold time" />
      <tbody>
        <TableRow
          exercise="Planche"
          maleName="Sven T."
          maleResult="10s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Human flag"
          maleName="Daniel O."
          maleResult="24s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Front lever"
          maleName="Sven T."
          maleResult="13s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Back lever"
          maleName="Elek B."
          maleResult="34s"
          femaleName="Anita H."
          femaleResult="8s"
        />
        <TableRow
          exercise="Handstand"
          maleName="Einar L."
          maleResult="1m 38s"
          femaleName="Solveig B."
          femaleResult="1m 37s"
        />
        <TableRow
          exercise="L-sit"
          maleName="Jostein L."
          maleResult="1m 3s"
<<<<<<< HEAD
          femaleName="Anita"
=======
          femaleName="Anita H."
>>>>>>> 4b18287b234a1d58d8ef1414c7a2d0114988c83d
          femaleResult="46s"
        />
        <TableRow
          exercise="Dead hang"
<<<<<<< HEAD
          maleName="Nikolai"
          maleResult="3m 15s"
          femaleName="Ellen"
          femaleResult="3m 1s"
=======
          maleName="Nikolai D."
          maleResult="2m 59s"
          femaleName="Solveig B."
          femaleResult="3m 01s"
>>>>>>> 4b18287b234a1d58d8ef1414c7a2d0114988c83d
        />
      </tbody>
    </Table>
  );
};
