
const query = '{allTodos {id , text  }}'
const response = await fetch("http://localhost:8085/graphql",{
    method: "POST",
    headers : {
        "Content-Type" : "application/json" 
    },
    body : JSON.stringify({query : query })
}) 
console.log(response.json())