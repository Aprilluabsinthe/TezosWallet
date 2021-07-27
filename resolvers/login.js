// Resolver map

// example data
const users = [
    { userID: "94086", walletID: 'wallet264725415'},
    { userID: "94087", walletID: 'wallet264725416'},
    { userID: "94088", walletID: 'wallet264725417'},
];

const login = {
    Mutation: {
        login: async (_, { email }, { dataSources }) => {
            const user = await dataSources.userAPI.findOrCreateUser({ email });
            if (user) {
                user.token = Buffer.from(email).toString('base64');
                return user;
            }
        },
    },
};

module.exports = login;