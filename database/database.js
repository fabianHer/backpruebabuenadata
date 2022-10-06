import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "pruebabuendata", // db name,
  "postgres", // username
  "postGresql2022+", // password
  {
    host: "localhost",
    dialect: "postgres"
  }
);
