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

  /**
   * Edits the currenly logged in user.
   *
   * @param user-the user object with may edited fields
   * @returns the edited user
   */
  async editUser(user) {
    const userResponse = await client.put("user/self/", {
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
    });
    return userResponse.data;
  }

  /**
   * Edits the password of the currently logged in user.
   *
   * @param oldPassword-the old password of the user
   * @param newPassword-the new password of the user
   * @returns the edited user
   */

  async editPassword(oldPassword, newPassword) {
    const passwordResponse = await client.put("user/change/password/", {
      old_password: oldPassword,
      new_password: newPassword,
    });
    return passwordResponse.data;
  }

  async resetPassword(email) {
    const resetPasswordResponse = await client.post("user/password_reset/", {
      email: email,
    });
    return resetPasswordResponse;
  }

  async resetPasswordConfirm(newPassword, token) {
    const resetPasswordResponse = await client.post(
      "user/password_reset/confirm/",
      {
        password: newPassword,
        token: token,
      }
    );
    return resetPasswordResponse;
  }
}

export default new UserAPI();
