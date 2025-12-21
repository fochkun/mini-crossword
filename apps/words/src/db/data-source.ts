import { WordEntity } from '../entities/word.entity';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'crossword',
  password: 'devpass123',
  database: 'words_db',
  entities: [WordEntity],
  migrations: ['./src/db/migrations/*.ts'],
  synchronize: false,
});

export default AppDataSource;

// try {
//   AppDataSource.initialize();
//   console.log('Data Source has been initialized!');
// } catch (error) {
//   console.error('Error during Data Source initialization', error);
// }
