import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

interface URLAttributes {
  id: string;
  original_url: string;
}

export class URL extends Model<URLAttributes> {
  declare id: string;
  declare original_url: string;
}

URL.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    original_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "URL",
  }
);

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
    await sequelize.sync();
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Database initialization failed:", error);
  }
};
