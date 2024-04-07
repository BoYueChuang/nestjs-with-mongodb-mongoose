import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MusicModule } from './music/music.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // 加載環境變數
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // 注入ConfigModule以使用ConfigService
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DB_CONNECTION_STRING'),
      }),
      inject: [ConfigService], // 注入ConfigService
    }),
    UsersModule,
    PostsModule,
    MusicModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
