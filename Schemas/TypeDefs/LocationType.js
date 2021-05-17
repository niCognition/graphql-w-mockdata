const graphql = require('graphql');
const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLFloat} = graphql;

const LocationType = new GraphQLObjectType({
    name: "Location",
    fields: () => ({
        id: { type: GraphQLInt },
        city_name: { type: GraphQLString },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat }
    })
})

module.exports = LocationType