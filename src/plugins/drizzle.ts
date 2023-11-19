import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import { Client } from "pg";

declare module "fastify" {
    export interface FastifyInstance {
        drizzle: NodePgDatabase;
    }
}

const drizzlePlugin: FastifyPluginAsync = fp(async server => {
    const client = new Client({
        host: "127.0.0.1",
        port: 5432,
        user: "postgres",
        password: "password",
        database: "student_tracker",
      });
       
      await client.connect();

      server.decorate("drizzle", drizzle(client));

      server.addHook("onClose", async () => {
          await client.end();
          console.log("Drizzle connection closed");
      })
})

export default drizzlePlugin;