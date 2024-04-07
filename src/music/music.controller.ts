import { Controller, Get } from '@nestjs/common';
import { MusicService } from './music.service';

@Controller('music')
export class MusicController {

    constructor(private _MusicService: MusicService) { }


    @Get()
    getMusic() {
        return this._MusicService.getsMusic();
    }
}
