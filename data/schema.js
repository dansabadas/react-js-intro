import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString
  } from 'graphql';
  
//   let Schema = (db) => {
  
//     let linkType = new GraphQLObjectType({
//       name: 'Link',
//       fields: () => ({
//         _id: { type: GraphQLString },
//         title: { type: GraphQLString },
//         url: { type: GraphQLString }
//       })
//     });
  
//     let schema = new GraphQLSchema({
//       query: new GraphQLObjectType({
//         name: 'Query',
//         fields: () => ({
//           links: {
//             type: new GraphQLList(linkType),
//             resolve: () => db.collection("links").find({}).toArray()
//           }
//         })
//       })
//     });
  
//     return schema
//   };
  
//   export default Schema;

let counter = 42;
let data = [42,43,44];
let data2 = [
    {counter: 42},
    {counter: 43},
    {counter: 44}
];

let counterType = new GraphQLObjectType({
    name: 'Counter',
    fields: () => ({
        counter: { type: GraphQLInt }
      })
});

let Schema = (db) => {
    let linkType = new GraphQLObjectType({
        name: 'Link',
        fields: () => ({
        _id: { type: GraphQLString },
        title: { type: GraphQLString },
        url: { type: GraphQLString }
        })
    });

    let schema = new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        fields: () => ({
          links: {
            type: new GraphQLList(linkType),
            resolve: () => db.collection("links").find({}).toArray()
          }
        })
      })
    });

    return schema;
};

let schema_2 = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        data: {
          type: new GraphQLList(counterType), 
          resolve: () => data2   
        },
        message: {
            type: GraphQLString,
            resolve: () => "Hello graph QL"
          }
      })
    })
  });

let schema_1 = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        counter: {
          type: GraphQLInt,
          resolve: () => counter
        },
        message: {
            type: GraphQLString,
            resolve: () => "Hello graph QL"
          }
      })
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            incrementCounter:  {
                type: GraphQLInt,
                resolve: () => ++counter
            }
        })
    })
  });
  
  export default Schema;