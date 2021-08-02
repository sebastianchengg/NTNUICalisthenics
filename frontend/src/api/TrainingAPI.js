import client from "../core/client";

class TrainingAPI {
  async createTraining(training) {
    const trainingResponse = await client.post("training/create-training/", {
      name: training.name,
      trainer: training.trainer,
      max_registered: training.maxRegistered,
      starting_time: training.startingTime,
      finishing_time: training.finishingTime,
      show_time: training.showTime,
    });
    return trainingResponse;
  }

  async updateTraining(training) {
    const trainingResponse = await client.put(
      `training/update/${training.id}/`,
      {
        name: training.name,
        trainer: training.trainer,
        max_registered: training.maxRegistered,
        starting_time: training.startingTime,
        finishing_time: training.finishingTime,
        show_time: training.showTime,
      }
    );
    return trainingResponse;
  }

  async getTraining(id) {
    const response = await client.get(`training/${id}/`);
    return response.data;
  }

  async getRegisterableTraining() {
    const response = await client.get("training/list/registerable/");
    return response.data;
  }

  async getTrainingparticipants(id) {
    const response = await client.get(`training/registered/${id}/`);
    return response.data;
  }

  async createUserTrainingRelation(relation) {
    const relationResponse = await client.post("training/create-register/", {
      user: relation.user,
      training: relation.training,
      status: relation.status,
    });
    return relationResponse;
  }

  async updateUserTrainingRelation(relation) {
    const relationResponse = await client.put(
      `training/update-relation/${relation.user}-${relation.training}/`,
      {
        user: relation.user,
        training: relation.training,
        status: relation.status,
      }
    );
    return relationResponse;
  }

  async deleteUserTrainingRelation(relation) {
    await client.delete(
      `training/relation/delete/${relation.user}-${relation.training}/`
    );
  }
}

export default new TrainingAPI();
