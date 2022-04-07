import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import resolvers from './graphql/resolvers/index.js'

const server = new ApolloServer({
	typeDefs: importSchema('./graphql/types/schema.graphql'),
	resolvers,
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4001 }, () =>
	console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
)
