const students = (connection, Sequelize, Departments) => {
  return connection.define('students', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    departmentId: { type: Sequelize.INTEGER, references: { model: Departments, key: 'id' } },
    email: { type: Sequelize.STRING, allowNull: false },
    research_area: { type: Sequelize.STRING, allowNull: false },
  }, {
    defaultScope: {
      attributes: { exclude: ['deletedAt'] }
    }
  }, { paranoid: true })
}

module.exports = students
