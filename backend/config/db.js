import mongoose from "mongoose";


export const connectDB=async()=>{
    await mongoose.connect(process.env.CONNECT_DB).then(()=>console.log("DB Connected"));
}