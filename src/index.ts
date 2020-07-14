import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { genSchema } from './utils/generateSchema';

async function bootstrap() {
  const schema = (await genSchema()) as any;

  const server = new ApolloServer({
    schema,
    playground: true,
  });

  // Start the server
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
