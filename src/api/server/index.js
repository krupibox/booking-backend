import dotenv from 'dotenv';
import initServer from './server.js';
import config from '../../config.js';

dotenv.config();
let server;

function handleStopHapi(err) {
  console.error(err);

  if (!server) {
    process.exit(0);
    return;
  }

  server.ext({
    type: 'onPostStop',
    method: () => process.exit(0),
  });

  server.stop({ timeout: 10 * 60 * 1000 });
}
process.on('unhandledRejection', (err) => handleStopHapi(err));
process.on('uncaughtException', (err) => handleStopHapi(err));

async function start() {
  server = await initServer(config);

  process.on('SIGINT', handleStopHapi);
  process.on('SIGTERM', handleStopHapi);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
  process.send && process.send('ready');
}

start()
  .catch((err) => handleStopHapi(err));
