const {gql} = require('apollo-server-express')

const typeDefs = gql`
    # User Schema
    type User{
        userID:String!,
        walletID:String!,
    }

    # Wallet Schema
    type Wallet{
        walletID:String!
        userID:String!
        address: String!
        publicKey:String!
        privateKey:String!
    }
    
    # the schema allows the following query:
    type Query {
        users: [User]
        getUserByUserID(userID:String!):User
        getUserByWalletID(walletID:String!):User
        wallets: [Wallet]
        getWalletByUserID(userID:String!):Wallet
        getWalletByWalletID(walletID:String!):Wallet
        getWalletByAddress(address:String!):Wallet
    }

    type Mutation {
        
    }
`;

module.exports = typeDefs;