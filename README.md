Real World GraphQL

## notes

1. Type in package.json
```json
"type": "commonjs" => require(package)

"type": "module" => import {} from package
```

2. makeExecutableSchema has changed
```shell script
npm install graphql-tools
```
```javascript
const { makeExecutableSchema }= require('graphql-tools')
```