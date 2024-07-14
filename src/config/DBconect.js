import mongoose from "mongoose";

function dataBaseConect() {
    mongoose.connect(process.env.DB_LOCAL_CONNECT_STRING);

    return mongoose.connection;
}

export default dataBaseConect;