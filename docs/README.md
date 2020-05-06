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

To get your random generated indoor idea, simply send a GET request on http://localhost:3000/ideas

## Get A Specific Number of Ideas

Do you want maybe 10 indoor ideas at once? Simply make a GET request on http://localhost:3000/ideas/10 and you should get the number of ideas you specified.

## Get a certain Activity type

Want to do something specific, like maybe ideas for indoor games? Make a GET request on http://localhost:3000/ideas/games and you should get a certain number of ideas! If you want to use this plus the previous segment of getting a specific number of ideas, then make sure to do: http://localhost:3000/ideas/10/games

## Submit an Idea

Do you want to submit your own idea to make other's days a little bit better? Simply follow the following structure:

```
idea: String
idea_by: String
activity_type: String
```

## Delete an Idea

Oh no, did you maybe make a typo? Didn't like the idea after all? You can send a DELETE request to http://localhost:300/ideas?_method=DELETE

```
id: String
```