
import config from "../Config/Config";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appWriteUrl)
            .setProject(config.appWriteProjectId)
            //console.log(config.appWriteUrl);
        this.account = new Account(this.client);
    }
    

    //function to signup
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name)
            if(userAccount){
                return this.loginAccount({email,password})
            }
            else{
                return userAccount
            }

        } catch (error) {
            throw error
            
        }

    }

    //function to login
    async loginAccount({email,password}){
        try {
            await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    //function to get the current user
    async getCurrentUser(){
        try {
            return await this.account.get()
            
        } catch (error) {
            console.log("Server Error" + error);
        }
        return null;
    }


    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Server Error" + error);
        }
    }
}
//whenever authService class is called a new object is created from this AuthService class with properties 
//client and account , The constructor is a special method that runs when an instance of the class is created. In this constructor:
//The setEndpoint() and setProject() methods of client are called to configure its properties using values from the config object.
//An instance of the Account class is created and assigned to the account property. The Account class is initialized with the client object.


const authService = new AuthService()

//this is an object which gives an instance of AuthService class 

export default authService
