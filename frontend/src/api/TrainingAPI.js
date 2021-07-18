import client from "../core/client";

class TrainingAPI {
  async createTraining(training) {
    const trainingResponse = await client.post("training/create-training/", {
      name: training.name,
      trainer: training.trainer,
      max_registered: training.max_registered,
      starting_time: training.starting_time,
      finishing_time: training.finishing_time,
      show_time: training.show_time,
    });
    return trainingResponse;
  }
}

export default new TrainingAPI();
