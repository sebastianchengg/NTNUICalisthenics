import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import TrainingAPI from "../../../api/TrainingAPI";
import Grid from "@material-ui/core/Grid";
import { InternalButton } from "../../LinkButton";
import { useHistory } from "react-router";
import { useSessionContext } from "../../../context/session";
import "./CreateTrainingForm.css";
import { string } from "prop-types";

export const CreateTrainingForm = () => {
  const session = useSessionContext();
  const history = useHistory();
  const [name, setName] = useState("");
  const [trainer, setTrainer] = useState("");
  const [maxRegistered, setMaxRegistered] = useState(0);
  const [startingTime, setStartingTime] = useState("");
  const [finishingTime, setFinishingTime] = useState("");
  const [showTime, setShowTime] = useState("");
  const [validated, setValidated] = useState(false);

  const formatDateTime = (dateTime) => {
      return dateTime.replace("T", " ")
  }

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
      max_registered: parseInt(maxRegistered),
      starting_time: formatDateTime(startingTime),
      finishing_time: formatDateTime(finishingTime),
      show_time: formatDateTime(showTime),
    };

    console.log(training)

    TrainingAPI.createTraining(training).then(() => {
      session.updateSelfUser().then(() => history.push("/profile"));
    });
  };

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <div className="create-training-container">
          <Form noValidate validated={validated} onSubmit={onSubmit}>
            <Grid item>
              <Form.Label>Name of training: </Form.Label>
            </Grid>
            <Grid item>
              <Form.Control
                size="sm"
                type="text"
                pattern="^[a-zA-Z\p{L}]+$"
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
                pattern="^[a-zA-Z\p{L}]+$"
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
                placeholder=""
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
                placeholder=""
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

            <InternalButton
          buttonStyle="btn-primary"
          buttonSize="btn-medium"
          extraCss="apply-here profile-button"
          type="submit"
        >
          Register
        </InternalButton>
          </Form>
        </div>
      </Grid>
    </>
  );
};

export default CreateTrainingForm;
