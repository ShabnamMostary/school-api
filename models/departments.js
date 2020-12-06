const departments = (connection, Sequelize) => {
  return connection.define('departments', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    building: { type: Sequelize.STRING },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = departments
