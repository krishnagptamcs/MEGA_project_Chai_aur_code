import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();

  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique,
        email,
        password,
        name
      );

      if (userAccount) {
        // call another method

        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // this will catch , if our connectiion not made i.e network error
      //   throw error;
      console.log("the error is ", error);
    }

    return null; /// if user not loged in
  }

  async logout() {
    try {
      this.account.deleteSessions(); // it will logout user from all
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService(); // creating the new object of class AuthService

export default authService;
