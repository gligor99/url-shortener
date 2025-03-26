import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://postgres:password@db:5432/url_shortener",
  {
    dialect: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "url_shortener",
    logging: false,
    retry: {
      max: 5,
      backoffBase: 1000,
    },
  }
);

export default sequelize;
