import React from "react";
import Table from "react-bootstrap/Table";
import "./Tables.css";

const TableHead = ({type}) => {
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

export const RepLeaderBoard = () => {
  return (
    <Table striped variant="dark">
      <TableHead type="Reps"/>
      <tbody>
        <TableRow
          exercise="Handstand push-ups"
          maleName="-"
          maleResult="-"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Push-ups"
          maleName="-"
          maleResult="-"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Muscle-ups"
          maleName="Olav"
          maleResult="7"
          femaleName="Anita"
          femaleResult="5"
        />
        <TableRow
          exercise="Pull-ups"
          maleName="Sebastian"
          maleResult="25"
          femaleName="Anita"
          femaleResult="19"
        />
        <TableRow
          exercise="Dips"
          maleName="Sebastian"
          maleResult="57"
          femaleName="Anita"
          femaleResult="27"
        />
        <TableRow
          exercise="Dragon flags"
          maleName="Kristoffer"
          maleResult="25"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Pistol squats"
          maleName="Gulleik"
          maleResult="25"
          femaleName="Anita"
          femaleResult="38"
        />
        <TableRow
          exercise="Toes to bar"
          maleName="-"
          maleResult="-"
          femaleName="-"
          femaleResult="-"
        />
      </tbody>
    </Table>
  );
};

export const DurationLeaderboard = () => {
  return (
    <Table striped variant="dark">
      <TableHead type="Hold time"/>
      <tbody>
        <TableRow
          exercise="Planche"
          maleName="Peder"
          maleResult="5s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Human flag"
          maleName="Daniel"
          maleResult="24s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="Front lever"
          maleName="Daniel"
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
          maleName="-"
          maleResult="-"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          exercise="L-sit"
          maleName="-"
          maleResult="-"
          femaleName="-"
          femaleResult="-"
        />
      </tbody>
    </Table>
  );
};
