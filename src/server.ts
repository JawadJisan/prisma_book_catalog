import { Server } from 'http';
import app from './app';
import config from './config';

async function bootstrap() {
  const server: Server = app.listen(config.port, () => {
    // logger.info(`Server running on port ${config.port}`);
    console.log(`Server running on port ${config.port}`);
  });

  const exitHandler = () => {
    if (server) {
      server.close(() => {
        console.log('Server closed');
        // logger.info('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    console.log(error);
    // errorlogger.error(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    // logger.info('SIGTERM received');
    console.log('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

bootstrap();
