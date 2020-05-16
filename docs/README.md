# IdeaIn API

This API allows for users to submit theirindoor ideas that will be added to the indoor idea generator. 

## Getting Started

To install this API, simply clone the repo, and then navigate to the directory of the folder, and use the following command: 

```
npm install 
```

You can also start the server with the following command!
```
npm start
```

## Get All Ideas

To get your random generated indoor idea, simply send a GET request on http://localhost:3000/



## Submit an Idea

Do you want to submit your own idea to make other's days a little bit better? Simply follow the following structure:

```
idea_by: String
idea: String

```

and make a post request to http://localhost:3000/ideas/new

## Delete an Idea

Oh no, did you maybe make a typo? Didn't like the idea after all? You can send a DELETE request to http://localhost:3000/ideas/:id

```
id: String
```

## Update an Idea

You can also update an idea by putting a put request to http://localhost:3000/:id'