import Fastify from "fastify";
import indexRoute from "./routes";

const fastify = Fastify();

fastify.register(indexRoute)

const { ADDRESS = 'localhost', PORT = '3000' } = process.env;

const start = async () => {
  try {
    await fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) });
    const address = fastify.server.address();
    const port = typeof address === 'string' ? address : address?.port;

    console.log(`Server listening at ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();