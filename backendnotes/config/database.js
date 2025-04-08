import { Sequelize } from "sequelize";

const db = new Sequelize("notes", "root", "notes123", {
    host: "34.28.107.17",
    dialect: "mysql",
    timezone: "+07:00"
}) 

export default db
