
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const { MongoClient } = require('mongodb');
const schema = require('../schema');
const isEmail = require('isemail');
const mongoose = require('mongoose');

// const DB_PATH = 'mongodb://127.0.0.1:27017/TezosDB'
// const client = new MongoClient('mongodb://localhost:27017/test')
// client.connect()

// const connect = () =>{
//     mongoose.connect(DB_PATH,{ useNewUrlParser: true } )
//     mongoose.connection.on('disconnected',()=>{
//         mongoose.connect(DB_PATH)
//     })
//     mongoose.connection.on('err',()=>{
//         console.log.error(err)
//     })
//     mongoose.connection.on('connected',async ()=>{
//         console.log("Connected to MongoDB:" , DB_PATH)
//     })
// }

// connect()

let UserSchema = new mongoose.Schema({
    userID: String,
    walletID: String
})
let UserModel = mongoose.model('users',UserSchema,'users')

let WalletSchema = new mongoose.Schema({
    walletID:String,
    userID:String,
    address: String,
    publicKey:String,
    privateKey:String,
})
let WalletModel = mongoose.model('wallets',WalletModel,'wallets')


async function startApolloServer() {
    const app = express();
    const server = new ApolloServer({

        schema,

        // context: async ({ req }) => {
        //     // simple auth check on every request
        //     const auth = req.headers && req.headers.authorization || '';
        //     const email = Buffer.from(auth, 'base64').toString('ascii');
        //
        //     if (!isEmail.validate(email)) return { user: null };
        //
        //     // find a user by their email
        //     const users = await store.users.findOrCreate({ where: { email } });
        //     const user = users && users[0] || null;
        //
        //     return { user: { ...user.dataValues } };
        // },

        // dataSources: () => ({
        //     users: new Users(client.db().collection('users')),
        //     wallets: new Wallets(client.db().collection('wallets'))
        // })
    });
    await server.start();

    server.applyMiddleware({ app });

    app.use((req, res) => {
        res.status(200);
        res.send('Hello!');
        res.end();
    });

    await new Promise(resolve => app.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    return { server, app };
}

startApolloServer()