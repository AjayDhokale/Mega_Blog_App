import conf from '../config/config.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {

    client = new Client();
    account;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            // console.log(userAccount);
            // console.log(email,password, name);
            
            
            if (userAccount) {
               return this.login({email, password})
            } else {
                // console.log("not login in ajay");
                
                return userAccount
            }

        } catch (error) {
            throw error
            // console.log("Appwrite service :: createUser :: error  ", error);

        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
            
        } catch (error) {
            // throw error;
            console.log("Appwrite service :: login :: error  ", error);

        }
    }

    async getCurrentUser() {
        try {
            return this.account.get()
        } catch (error) {
            // console.log("Appwrite service :: getcurrentUser :: error  ", error);
            return null
        }

    }

    async logout() {
        try {
            return this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error  ", error);

        }
    }

}


const authService = new AuthService()

export default authService