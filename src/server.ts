import { fastify } from "fastify";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/health", (req, reply) => {
  return reply.status(200).send({ message: "OK" });
});

app.listen({ port: env.PORT }).then(() => {
  console.log(`HTTP Server Running at http://localhost:${env.PORT}`);
});
