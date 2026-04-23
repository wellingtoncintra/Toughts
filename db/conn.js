import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('toughts', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos com o Sequelize!')
} catch (error) {
  console.error('Não foi possível conectar:', error)
}

export default sequelize