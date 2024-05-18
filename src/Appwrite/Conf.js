import { Client,ID,Databases,Storage,Query } from "appwrite";
import config from "../Config/Config";

export class Service{
    client = new Client();
    database;
    storage;

    constructor(){
        this.client
        .setEndpoint(config.appWriteUrl)
        .setProject(config.appWriteProjectId)


        this.database = new Databases(this.client)
        this.storage = new Storage(this.client)
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return this.database.createDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionsId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.log("Server Error" + error);
            
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.database.updateDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionsId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }
    async deletePost(slug){
        try {
            await this.database.deleteDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionsId,
                slug
            )
            return true;
            
        } catch (error) {
            console.log("Server Error" + error);
            return false;
            
        }
    }
    async getPost(slug){
        try {
            return await this.database.getDocument(
                config.appWriteDataBaseId,
                config.appWriteCollectionsId,
                slug
            )
        } catch (error) {
            console.log("Server Error" + error);
        }
    }

    async getAllPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.database.listDocuments(
                config.appWriteDataBaseId, 
                config.appWriteCollectionsId,
                queries
            )
        } catch (error) {
            console.log("Server Error" + error);
        }
    }

    //file upload services

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Server Error" + error);
            return false
            
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                config.appWriteBucketId,
                fileId

            )
        } catch (error) {
            console.log("Server Error" + error);
            return false;
        }
    }
    getFilePreview(fileId){
        return this.storage.getFilePreview(
            config.appWriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;

