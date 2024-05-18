const config = {
    appWriteUrl:String(import.meta.env.VITE_appwriteURL),
    appWriteProjectId: String(import.meta.env.VITE_appwriteProjectID),
    appWriteDataBaseId: String(import.meta.env.VITE_appwriteDatabaseID),
    appWriteCollectionsId: String(import.meta.env.VITE_appwriteCollectionID),
    appWriteBucketId: String(import.meta.env.VITE_appwriteBucketID),
}

export default config;