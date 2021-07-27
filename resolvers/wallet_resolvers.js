// Resolver map

// example data
const wallets = [
    { walletID: 'wallet264725415',userID: "94086", address:"QWERTYUIO",publicKey:"WSXCVBNHGBNMLMNBGHJ",privateKey:"68974YGFDER^&*IJ"},
    { walletID: 'wallet264725416',userID: "94087", address:"ASDFGHJKL",publicKey:"QWERTYUIOPLKJHGFDSA",privateKey:"47ygfYUIJNBNMik4"},
    { walletID: 'wallet264725417',userID: "94088", address:"ZXCVBNMJG",publicKey:"15YGGHNBHUIUYTREDCV",privateKey:"17djvhrsofsk983y"},
];

const wallet_resolvers = {
    Query: {
        wallets(){
            return wallets
        },
        getWalletByUserID(parent, args, context, info){
            return wallets.find(wallet => wallet.userID === args.userID)
        },
        getWalletByWalletID(parent, args, context, info){
            return wallets.find(wallet => wallet.walletID === args.walletID)
        },
        getWalletByAddress(parent, args, context, info){
            return wallets.find(wallet => wallet.address === args.address)
        }
    }
};

module.exports = wallet_resolvers;