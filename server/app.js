import express from 'express'
import dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'
import { importSchema } from 'graphql-import'
import resolvers from './graphql/resolvers/index.js'
import mongoose from 'mongoose'
import User from './models/User.js'
import Snap from './models/Snap.js'

const server = new ApolloServer({
	typeDefs: importSchema('./graphql/schema.graphql'),
	resolvers,
	context: {
		User,
		Snap,
	},
})

dotenv.config()
mongoose
	.connect(process.env.DB_URI)
	.then(() => {
		console.log('Connected to MongoDb')
	})
	.catch(err => {
		console.log(err)
	})
const app = express()
server.applyMiddleware({ app })

app.listen({ port: 4001 }, () =>
	console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
)
