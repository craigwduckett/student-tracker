import { FastifyInstance } from "fastify";
import { users } from "../../db/schema/user";

const userRoute = async (fastify: FastifyInstance) => {
    fastify.get('/', async () => {
        const newUser =  { 
            name: 'test', 
            email: 'test', 
            created_at: new Date(), 
            updated_at: new Date() 
        }
        
        return await fastify.drizzle.insert(users).values(newUser).returning();
    })
}

export default userRoute;