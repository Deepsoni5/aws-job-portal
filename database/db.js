import mongoose from "mongoose";

const dbConnection = async () => {
  const DB_URI =
    "mongodb+srv://fichadiyadeep:Deepsoni@cluster0.j6c377s.mongodb.net/";
  try {
    await mongoose.connect(DB_URI, { useUnifiedTopology: true });
    console.log("Database Connected");
  } catch (error) {
    console.log("DB ERROR", error.message);
  }
};

export default dbConnection;
