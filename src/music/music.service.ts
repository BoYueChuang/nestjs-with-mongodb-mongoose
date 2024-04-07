import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Music } from 'src/schemas/Music.schema';


@Injectable()
export class MusicService {

    constructor(
        @InjectModel(Music.name) private musicModel: Model<Music>,
    ) { }

    getsMusic() {
        return this.musicModel.find().populate(['results']);
    }
}
