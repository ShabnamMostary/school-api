const faculty = (connection, Sequelize, Departments) => {
  return connection.define('faculty', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING },
    departmentId: { type: Sequelize.INTEGER, references: { model: Departments, key: 'id' } },
    email: { type: Sequelize.STRING },
    research_area: { type: Sequelize.STRING },
  }, {
    tableName: 'faculty',
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    },
  }, { paranoid: true })
}

module.exports = faculty
