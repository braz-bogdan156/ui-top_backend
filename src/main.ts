import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3000;

  const allowedOrigins = [
    'http://localhost:3000',
    'https://ui-top-frontend.vercel.app',
  ];

  app.enableCors({
    origin: allowedOrigins,
    credentials: true, // якщо використовуєш куки або авторизацію
  });

  await app.listen(PORT, () => {
    console.log(`Application is running on: http://localhost:${PORT}`);
  });
}
bootstrap();
