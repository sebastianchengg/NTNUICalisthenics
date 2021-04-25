import React from "react";
import Table from "react-bootstrap/Table";
import "./Tables.css";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="table-separate">Exercise</th>
        <th className="table-separate">Male</th>
        <th className="table-separate">Reps</th>
        <th className="table-separate">Female</th>
        <th>Reps</th>
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
      <TableHead />
      <tbody>
        <TableRow
          excersise="Handstand push-ups"
          maleName="-"
          maleResult="-"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          excersise="Push-ups"
          maleName="-"
          maleResult="-"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          excersise="Muscle-ups"
          maleName="Olav"
          maleResult="7"
          femaleName="Anita"
          femaleResult="5"
        />
        <TableRow
          excersise="Pull-ups"
          maleName="Sebastian"
          maleResult="25"
          femaleName="Anita"
          femaleResult="19"
        />
        <TableRow
          excersise="Dips"
          maleName="Sebastian"
          maleResult="57"
          femaleName="Anita"
          femaleResult="27"
        />
        <TableRow
          excersise="Dragon flags"
          maleName="Kristoffer"
          maleResult="25"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          excersise="Pistol squats"
          maleName="Gulleik"
          maleResult="25"
          femaleName="Anita"
          femaleResult="38"
        />
        <TableRow
          excersise="Toes to bar"
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
      <TableHead />
      <tbody>
        <TableRow
          excersise="Planche"
          maleName="Peder"
          maleResult="5s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          excersise="Human flag"
          maleName="Daniel"
          maleResult="24s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          excersise="Front lever"
          maleName="Daniel"
          maleResult="12s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          excersise="Back lever"
          maleName="Peter"
          maleResult="29s"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          excersise="Handstand"
          maleName="-"
          maleResult="-"
          femaleName="-"
          femaleResult="-"
        />
        <TableRow
          excersise="L-sit"
          maleName="-"
          maleResult="-"
          femaleName="-"
          femaleResult="-"
        />
      </tbody>
    </Table>
  );
};
