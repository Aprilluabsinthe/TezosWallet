// const {makeExecutableSchema} = require('apollo-server-express');
const { makeExecutableSchema }= require('graphql-tools')

const typeDefs = require('./type-defs/typeDefs')
const login = require('./resolvers/login')
const resolvers_user = require('./resolvers/user_resolvers')
const resolvers_wallet = require('./resolvers/wallet_resolvers')

const schema = makeExecutableSchema({
    typeDefs,
    resolvers:[resolvers_user,resolvers_wallet]
});

module.exports = schema