import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { MusicDeatail } from './MusicDetail';

@Schema()
export class Music {
  @Prop({ required: true })
  resultCount: string;

  @Prop({ required: true })
  results?: MusicDeatail[];
}

export const MusicSchema = SchemaFactory.createForClass(Music);
