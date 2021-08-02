import React, { useState } from "react";
import { Form } from "react-bootstrap";
import TrainingAPI from "../../../api/TrainingAPI";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router";
import "./CreateTrainingForm.css";

export const CreateTrainingForm = ({ identifier, remove }) => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [trainer, setTrainer] = useState("");
  const [maxRegistered, setMaxRegistered] = useState(0);
  const [startingTime, setStartingTime] = useState("");
  const [finishingTime, setFinishingTime] = useState("");
  const [showTime, setShowTime] = useState("");
  const [validated, setValidated] = useState(false);

  const formatDateTime = (dateTime) => {
    return dateTime.replace("T", " ");
  };

  const onSubmit = (e) => {
    setValidated(true);
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      e.stopPropagation();
      return;
    }

    const training = {
      name: name,
      trainer: trainer,
      maxRegistered: parseInt(maxRegistered),
      startingTime: formatDateTime(startingTime),
      finishingTime: formatDateTime(finishingTime),
      showTime: formatDateTime(showTime),
    };

    console.log(training);

    TrainingAPI.createTraining(training).then(() => history.push("/profile"));
  };


  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className="create-training-container">
        <div className="delete-container" onClick={() => remove(identifier)}>
          <i className="fas fa-times delete" />
        </div>
        <Form noValidate validated={validated} onSubmit={onSubmit}>
          <Grid item>
            <Form.Label>Name of training: </Form.Label>
          </Grid>
          <Grid item>
            <Form.Control
              size="sm"
              type="text"
              minLength={2}
              placeholder="Name of training"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <br />

          <Grid item>
            <Form.Label>Trainer: </Form.Label>
          </Grid>
          <Grid item>
            <Form.Control
              size="sm"
              type="text"
              minLength={2}
              placeholder="Trainer"
              onChange={(e) => setTrainer(e.target.value)}
              required
            />
          </Grid>
          <br />

          <Grid item>
            <Form.Label>Max participants: </Form.Label>
          </Grid>
          <Grid item>
            <Form.Control
              size="sm"
              type="number"
              minLength={2}
              placeholder="Max participants"
              onChange={(e) => setMaxRegistered(e.target.value)}
              required
            />
          </Grid>
          <br />

          <Grid item>
            <Form.Label>Starting time: </Form.Label>
          </Grid>
          <Grid item>
            <Form.Control
              size="sm"
              type="datetime-local"
              onChange={(e) => setStartingTime(e.target.value)}
              required
            />
          </Grid>
          <br />

          <Grid item>
            <Form.Label>Finishing time: </Form.Label>
          </Grid>
          <Grid item>
            <Form.Control
              size="sm"
              type="datetime-local"
              onChange={(e) => setFinishingTime(e.target.value)}
              required
            />
          </Grid>
          <br />

          <Grid item>
            <Form.Label>Show at: </Form.Label>
          </Grid>
          <Grid item>
            <Form.Control
              size="sm"
              type="datetime-local"
              placeholder=""
              onChange={(e) => setShowTime(e.target.value)}
              required
            />
          </Grid>
          <br />

        </Form>
      </div>
    </Grid>
  );
};

export default CreateTrainingForm;
