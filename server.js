const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');

const schema = buildSchema(`
    type Query {
        hello: String
    },
    type Query {
        quoteOfTheDay: String
        random: Float!
        rollThreeDice:[Int]
    }
`);

const root = {
    hello: ()=>{
        return "HEllo world!!";
    },
    quoteOfTheDay: () =>{
        return Math.random() < 0.5 ? 'Take it easy': 'Salvatlies within';
    },
    random: () =>{
        return Math.random();
    },
    rollThreeDice:() =>{
        return [1,2,3].map((_) => 1 + )
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql:true,
}));

app.listen(4000);
console.log(' Running a GraphQL API server at http:// localhost: 4000/ graphql');