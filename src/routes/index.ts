import { FastifyInstance } from "fastify";

const indexRoute =async (fastify: FastifyInstance) => {
    fastify.get('/', async () => {
        return { message: 'Hello world!' }
    })
};

export default indexRoute;