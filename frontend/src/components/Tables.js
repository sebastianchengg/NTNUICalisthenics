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
          maleName="Sondre"
          maleResult="18"
          femaleName="Ellen"
          femaleResult="1"
        />
        <TableRow
          exercise="π/2 Handstand push-ups"
          maleName="Sondre"
          maleResult="9"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Push-ups"
          maleName="Sebastian"
          maleResult="104"
          femaleName="Anita"
          femaleResult="70"
        />
        <TableRow
          exercise="Muscle-ups bar"
          maleName="Kim"
          maleResult="13"
          femaleName="Solveig M."
          femaleResult="6"
        />
        <TableRow
          exercise="Muscle-ups rings"
          maleName="Kim"
          maleResult="10"
          femaleName="Amaleen"
          femaleResult="6"
        />
        <TableRow
          exercise="Pull-ups"
          maleName="Sebastian"
          maleResult="32"
          femaleName="Solveig M."
          femaleResult="24"
        />
        <TableRow
          exercise="Dips"
          maleName="Sebastian"
          maleResult="65"
          femaleName="Anita"
          femaleResult="33"
        />
        <TableRow
          exercise="Dragon flags"
          maleName="Sebastian"
          maleResult="26"
          femaleName="Solveig M."
          femaleResult="12"
        />
        <TableRow
          exercise="Pistol squats"
          maleName="Marceau"
          maleResult="75"
          femaleName="Anita"
          femaleResult="83"
        />
        <TableRow
          exercise="Toes to bar"
          maleName="Lasse"
          maleResult="35"
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
          maleName="Viktor"
          maleResult="45s"
          femaleName="Anita"
          femaleResult="8s"
        />
        <TableRow
          exercise="Handstand"
          maleName="Lima"
          maleResult="1m 40s"
          femaleName="Solveig B."
          femaleResult="1m 37s"
        />
        <TableRow
          exercise="One arm handstand"
          maleName="Sondre"
          maleResult="34s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="L-sit"
          maleName="Jostein"
          maleResult="1m 3s"
          femaleName="Anita"
          femaleResult="46s"
        />
        <TableRow
          exercise="Dead hang"
          maleName="Nikolai"
          maleResult="3m 15s"
          femaleName="Solveig B."
          femaleResult="3m 1s"
        />
      </tbody>
    </Table>
  );
};
