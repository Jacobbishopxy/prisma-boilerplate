import { nexusPrismaPlugin } from 'nexus-prisma'
import { intArg, makeSchema, objectType, stringArg } from '@nexus/schema'

// Define ObjectType
// ...

// Define Query
const Query = objectType({
  name: 'Query',
  definition(t) {
    // ...
  },
})

// Define Mutation
const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    // ...
  },
})

export const schema = makeSchema({
  types: [Query, Mutation],
  plugins: [nexusPrismaPlugin()],
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
