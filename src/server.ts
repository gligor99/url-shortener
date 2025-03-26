import express from "express";
import urlRoutes from "./routes/urlRoutes";
import { initializeDatabase } from "./models/urlModel";

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", urlRoutes);

const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
