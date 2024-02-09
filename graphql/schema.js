import {buildSchema} from "graphql";

export default buildSchema(
    `
    type Todo {
        id: ID!
        text: String!
        finished : Boolean!
    }
    type RootQuery{
         allTodos : [Todo]!
         oneTodo(id: Int!) : Todo!
         feltredTodo(finished: Boolean!): [Todo]!
    }
    type mutationQuery {
        createTodo(text : String!): Todo!
        updateTodo(id : Int!): String!
        deleteTodo(id : Int!): String!
    }
    schema {
        query : RootQuery 
        mutation : mutationQuery
        
    }
    `)