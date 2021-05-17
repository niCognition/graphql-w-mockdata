const graphql = require('graphql');
const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLSchema, GraphQLList} = graphql;
const userData = require("../MOCK_DATA.json");
const LocationType = require('./TypeDefs/LocationType')

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllLocations: {
            type: new GraphQLList(LocationType),
            args: {id: { type: GraphQLInt}},
            resolve(parent, args) {
                return userData
            }
        }
    }
})
const Mutation = new GraphQLObjectType({
    name: "Mutation", 
    fields: {
        createLocation: {
            type: LocationType,
            args: {
                city_name: {type: GraphQLString},
                latitude: {type: GraphQLFloat},
                longitude: {type: GraphQLFloat},
            },
            resolve(parent, args) {
                userData.push({
                    id: userData.length + 1, city_name: args.city_name, 
                    latitude: args.latitude, longitude: args.longitude})
                    return args
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation});
