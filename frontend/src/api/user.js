import client from "./client"

class AuthenticationService {

/**
   * Create a new user
   *
   * @param user - The user to create
   * @param password - The password for the user
   * @param logIn - If login should happen automatically if creating the
   * user is sucessful
   * @param remember - If logIn is set to true, and we successfully log in,
   * should the user stay logged in across sessions
   */
  async signUp(user, password, logIn = false, remember = false) {
    await client.post("user/register/", {
      ...user,
      password: password,
    });

    if (!logIn) {
      return;
    }

    //await this.login(user.email, password, remember);
  }
}

export default new AuthenticationService();