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
          maleName="Sven"
          maleResult="11"
          femaleName="Ellen"
          femaleResult="1"
        />
        <TableRow
          exercise="π/2 Handstand push-ups"
          maleName="Sven"
          maleResult="5"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Push-ups"
          maleName="Sebastian"
          maleResult="100"
          femaleName="Amaleen"
          femaleResult="49"
        />
        <TableRow
          exercise="Muscle-ups bar"
          maleName="Elek"
          maleResult="12"
          femaleName="Louise"
          femaleResult="4"
        />
        <TableRow
          exercise="Muscle-ups rings"
          maleName="Aleksander"
          maleResult="9"
          femaleName="Amaleen"
          femaleResult="6"
        />
        <TableRow
          exercise="Pull-ups"
          maleName="Sebastian"
          maleResult="32"
          femaleName="Louise"
          femaleResult="20"
        />
        <TableRow
          exercise="Dips"
          maleName="Sebastian"
          maleResult="65"
          femaleName="Louise"
          femaleResult="31"
        />
        <TableRow
          exercise="Dragon flags"
          maleName="Kristoffer S."
          maleResult="25"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Pistol squats"
          maleName="Peter"
          maleResult="69"
          femaleName="Rebekka"
          femaleResult="45"
        />
        <TableRow
          exercise="Toes to bar"
          maleName="Andreas"
          maleResult="34"
          femaleName="Solveig"
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
          maleName="Sven"
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
          maleName="Sven"
          maleResult="13s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Back lever"
          maleName="Elek"
          maleResult="34s"
          femaleName="Anita"
          femaleResult="8"
        />
        <TableRow
          exercise="Handstand"
          maleName="Einar"
          maleResult="1m 38s"
          femaleName="Solveig"
          femaleResult="1m 13s"
        />
        <TableRow
          exercise="L-sit"
          maleName="Jostein"
          maleResult="1m 3s"
          femaleName="Frida"
          femaleResult="18s"
        />
        <TableRow
          exercise="Dead hang"
          maleName="Nikolai"
          maleResult="2m 59s"
          femaleName="Ellen"
          femaleResult="2m 12s"
        />
      </tbody>
    </Table>
  );
};
