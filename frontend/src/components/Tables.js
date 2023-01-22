import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import {
  getLeaderboardRepetitions,
  getLeaderboardDuration,
} from "../api/training";
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
  const [leaderboardReps, setLeaderboardReps] = useState();

  useEffect(() => {
    getLeaderboardRepetitions().then((res) =>
      setLeaderboardReps(res.leaderboardRepetition)
    );
  }, []);

  const getLeaderboardRepetitionRows = () => {
    return (
      <tbody>
        {leaderboardReps &&
          leaderboardReps.map((leaderboardRep) => (
            <TableRow
              key={leaderboardRep.exercise}
              exercise={leaderboardRep.exercise}
              maleName={leaderboardRep.maleName}
              maleResult={leaderboardRep.maleRepetitions}
              femaleName={leaderboardRep.femaleName}
              femaleResult={leaderboardRep.femaleRepetitions}
            />
          ))}
      </tbody>
    );
  };

  return (
    <Table striped bordered responsive variant="dark">
      <TableHead type="Reps" />
      {getLeaderboardRepetitionRows()}
    </Table>
  );
};

//Component used in leaderboard page
export const DurationLeaderboard = () => {
  const [leaderboardDuration, setLeaderboardDuration] = useState();

  useEffect(() => {
    getLeaderboardDuration().then((res) =>
      setLeaderboardDuration(res.leaderboardDuration)
    );
  }, []);

  const getLeaderboardDurationRows = () => {
    return (
      <tbody>
        {leaderboardDuration &&
          leaderboardDuration.map((leaderboardDur) => (
            <TableRow
              key={leaderboardDur.exercise}
              exercise={leaderboardDur.exercise}
              maleName={leaderboardDur.maleName}
              maleResult={leaderboardDur.maleDuration}
              femaleName={leaderboardDur.femaleName}
              femaleResult={leaderboardDur.femaleDuration}
            />
          ))}
      </tbody>
    );
  };

  return (
    <Table striped bordered responsive variant="dark">
      <TableHead type="Hold time" />
      {getLeaderboardDurationRows()}
    </Table>
  );
};
