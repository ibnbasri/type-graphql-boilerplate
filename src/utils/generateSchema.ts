import * as path from 'path';
import { buildSchema } from 'type-graphql';
import * as glob from 'glob';

export const genSchema = () => {
  const pathToModules = path.join(__dirname, '../modules');

  const resolvers = glob
    .sync(`${pathToModules}/**/*.resolver.?s`)
    .map((resolver) => require(resolver).Resolvers);

  return buildSchema({
    resolvers: resolvers as any,
    emitSchemaFile: path.resolve(__dirname, '../schema.gql'),
  });
};
