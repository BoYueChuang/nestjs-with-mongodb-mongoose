import { Module } from '@nestjs/common';
import { MusicService } from './music.service';
import { MusicController } from './music.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Music, MusicSchema } from 'src/schemas/Music.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Music.name, schema: MusicSchema }
        ]),
    ],
    providers: [MusicService],
    controllers: [MusicController]
})
export class MusicModule { }
