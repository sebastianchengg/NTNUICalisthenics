import client from "../core/client";

/**
 * API abstraction of endpoints that interact with user objects.
 */
class UserAPI {
  /**
   * @returns The user that is currently logged in
   */
  async getSelfUser() {
    const response = await client.get("user/self/");
    return response.data;
  }
}

export default new UserAPI();
