import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('port starts at port 5000');
  await app.listen(5000);
}
bootstrap();
