/**
 * DB
 */
const Sequelize = require('sequelize')

const db = {}
const sequelize = new Sequelize({
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	host: process.env.DB_HOST,
	dialect: 'mysql'
})
db.sequelize = sequelize
db.Sequelize = Sequelize

// Model
db.Member = require('../login/login.model')(sequelize, Sequelize)

// eslint-disable-next-line prettier/prettier
 module.exports = db