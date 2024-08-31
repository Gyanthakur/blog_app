// import mongoose from "mongoose";
// const connetion = {}

// export const connectToDb = async ()  => {
//     try {
//         if(connection.isConnected){
//             console.log("Using existing onnection")
//             return;
//         }

//         const db = await mongoose.connect(process.env.MONGO)
//         connetion.isConnected = db.Connection[0].readyState;
//     } catch (error) {
//         console.log(error)
//         throw new Error("not connectToDb")
//     }
// }

import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};