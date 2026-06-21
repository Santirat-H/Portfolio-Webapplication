import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Default to 3001 so it doesn't collide with the Next.js dev server (3000).
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
