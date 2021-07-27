// Resolver map

// example data
const users = [
    { userID: "94086", walletID: 'wallet264725415'},
    { userID: "94087", walletID: 'wallet264725416'},
    { userID: "94088", walletID: 'wallet264725417'},
];

const user_resolvers = {
    Query: {
        getUserByUserID(parent, args, context, info){
            return users.find(user => user.userID === args.userID)
        },
        users(){
            return users
        },
        getUserByWalletID(parent, args, context, info){
            return users.find(user => user.walletID === args.walletID)
        },
    }
};

module.exports = user_resolvers;