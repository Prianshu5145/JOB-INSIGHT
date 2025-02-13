import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://agraharipriyanshu53:HPcJklH9VTM0fkiT@cluster0.ljrm3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;