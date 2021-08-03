import React, { useState, useEffect } from "react";
import { InternalButton } from "../../LinkButton";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router";
import { Form } from "react-bootstrap";
import TrainingAPI from "../../../api/TrainingAPI";

export const EditTrainingForm = ({ id }) => {
  const history = useHistory();
  const [trainingDetail, setTrainingDetail] = useState(null);
  const [name, setName] = useState();
  const [trainer, setTrainer] = useState();
  const [maxRegistered, setMaxRegistered] = useState();
  const [startingTime, setStartingTime] = useState();
  const [finishingTime, setFinishingTime] = useState();
  const [showTime, setShowTime] = useState();
  const [validated, setValidated] = useState(false);

  const formatDateTime = (dateTime) => {
    if (dateTime) {
      return dateTime.replace("T", " ");
    }
  };

  const formatDefaultDateTime = (dateTime) => {
    return dateTime.split("+")[0];
  };

  useEffect(() => {
    TrainingAPI.getTraining(id).then((training) => setTrainingDetail(training));
  }, [id]);

  useEffect(() => {
    if (trainingDetail) {
      setName(trainingDetail.name);
      setTrainer(trainingDetail.trainer);
      setMaxRegistered(trainingDetail.max_registered);
      setStartingTime(formatDefaultDateTime(trainingDetail.starting_time));
      setFinishingTime(formatDefaultDateTime(trainingDetail.finishing_time));
      setShowTime(formatDefaultDateTime(trainingDetail.show_time));
    }
  }, [trainingDetail]);

  const onSubmit = (e) => {
    setValidated(true);
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      e.stopPropagation();
      return;
    }

    const training = {
      id: trainingDetail.id,
      name: name,
      trainer: trainer,
      maxRegistered: parseInt(maxRegistered),
      startingTime: formatDateTime(startingTime),
      finishingTime: formatDateTime(finishingTime),
      showTime: formatDateTime(showTime),
    };

    TrainingAPI.updateTraining(training).then(() => history.push("/book"));
  };

  return (
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
              minLength={2}
              placeholder="Name of training"
              onChange={(e) => setName(e.target.value)}
              required
              defaultValue={name}
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
              defaultValue={trainer}
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
              defaultValue={maxRegistered}
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
              defaultValue={startingTime}
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
              defaultValue={finishingTime}
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
              defaultValue={showTime}
            />
          </Grid>
          <br />

          <InternalButton
            buttonStyle="btn-primary"
            buttonSize="btn-medium"
            extraCss="apply-here profile-button"
            type="submit"
          >
            Update
          </InternalButton>
        </Form>
      </div>
    </Grid>
  );
};

export default EditTrainingForm;
