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
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Push-ups"
          maleName="Erlend"
          maleResult="60"
          femaleName="Amaleen"
          femaleResult="49"
        />
        <TableRow
          exercise="Muscle-ups bar"
          maleName="Sebastian"
          maleResult="10"
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
          maleResult="27"
          femaleName="Anita"
          femaleResult="19"
        />
        <TableRow
          exercise="Dips"
          maleName="Sebastian"
          maleResult="65"
          femaleName="Anita"
          femaleResult="27"
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
          maleName="Gulleik"
          maleResult="25"
          femaleName="Rebekka"
          femaleResult="45"
        />
        <TableRow
          exercise="Toes to bar"
          maleName="Kristoffer L."
          maleResult="20"
          femaleName="Emilie"
          femaleResult="10"
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
          maleName="Daniel O."
          maleResult="12s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Back lever"
          maleName="Peter"
          maleResult="29s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Handstand"
          maleName="Einar"
          maleResult="1m 38s"
          femaleName="Ellen"
          femaleResult="43s"
        />
        <TableRow
          exercise="L-sit"
          maleName="Jostein"
          maleResult="1m 1s"
          femaleName="Frida"
          femaleResult="18s"
        />
        <TableRow
          exercise="Dead hang"
          maleName="Einar"
          maleResult="2m 11s"
          femaleName="Ellen"
          femaleResult="2m 12s"
        />
      </tbody>
    </Table>
  );
};
