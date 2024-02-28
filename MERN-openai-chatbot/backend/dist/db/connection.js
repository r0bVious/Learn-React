import { connect, disconnect } from "mongoose";
async function connectToDatabase() {
    try {
        await connect(process.env.MONGODB_URL);
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot Connect to MongoDB!");
    }
}
async function disconnectFromDB() {
    try {
        await disconnect();
    }
    catch (error) {
        console.log(error);
        throw new Error("Cannot Disconnect from MongoDB!");
    }
}
export { connectToDatabase, disconnectFromDB };
//# sourceMappingURL=connection.js.map