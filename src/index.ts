import Fastify from "fastify";
import indexRoute from "./routes";
import userRoute from "./routes/users";
import drizzlePlugin from "./plugins/drizzle";

const fastify = Fastify();

fastify.register(drizzlePlugin);
fastify.register(indexRoute)
fastify.register(userRoute, {prefix: '/user'})

const { ADDRESS = 'localhost', PORT = '3000' } = process.env;

const start = async () => {
  try {
    await fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) });
    const address = fastify.server.address();
    const port = typeof address === 'string' ? address : address?.port;

    console.log(`Server listening at ${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();