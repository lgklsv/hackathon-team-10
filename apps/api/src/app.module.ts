import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
      exclude: ['api/*'],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://lgklsv:1mfYeWMAFtBIwGSn@cluster0.axhyeyh.mongodb.net/hackathon-team-10?retryWrites=true&w=majority',
    ),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
