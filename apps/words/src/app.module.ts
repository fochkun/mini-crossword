import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WordEntity } from './entities/word.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const url = configService.get<string>('POSTGRES_HOST');
        const username =
          configService.get<string>('POSTGRES_USERNAME') || 'user';
        const password =
          configService.get<string>('POSTGRES_PASSWORD') || 'password';
        const port = Number(configService.get<string>('POSTGRES_PORT') || 5432);
        console.log('url is', url);
        console.log('username is', username);
        console.log('password is', password);
        console.log('port is', port);

        return {
          host: url,
          database: 'words_db',
          type: 'postgres',
          // url,
          port,
          username,
          password,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          migrations: [__dirname + '/../migration/*.ts'],
          migrationsRun: false,
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([
      WordEntity,
      // ContragentEntity,
      // ContractEntity,
      // DistrictEntity,
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
