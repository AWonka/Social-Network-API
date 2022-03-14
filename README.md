# Social-Network-API
## Link to video guide
https://youtu.be/IUkMgc7d8rA

## Beginning this Application
To begin this application you will want to start it by typing `node index.js`. 

After you will want to navigate to your `insomnia` application

## Creating a New User
To create a new User you will need to make a post request to `localhost:3001/api/users/`
![image showing user creation](/images/image1.PNG)
As you see we have created a user

## Getting Users
To get a User by ID you will need to make a get call to the following route `localhost:3001/api/users/:userId`
![getting user by id](/images/image2.PNG)
you will replace the `:userId` with the actual user id as seen in the photo

To get all users will you need to make a get call to the following route `localhost:3001/api/users/`

## Updating Existing User
To update an existing user, you will need to make a put request to the following route `localhost:3001/api/users/:userId`
![updating user](/images/image3.PNG)
Just like getting a user by id you replace `:userId` with the actual userId like the image above.

## Adding a Friend
To add a friend you will need to make a post call to the following route `localhost:3001/api/users/:userId/friends/:friendId`
![adding friend](/images/image4.PNG)
You will need to replace `:userId and :friendId` with the actual ids like the image above.

## Deleting a Friend
To delete a friend you will need to make a delete request to the same route as you do when adding a friend
![deleting a friend](/images/image5.PNG)

## Creating a new Thought
To create a new thought you will need to make a post request to the following route `localhost:3001/api/thoughts/:userId`
![creating a thought](/images/image6.PNG)
You will need to replace `:userId` with the actual user's id like the image above.

## Getting Thoughts
To get all thoughts you will need to make a get request to the following route `localhost:3001/api/thoughts/`
![getting all thoughts](/images/image7.PNG)

To get a thought by ID you will need to make a get request to the following route `localhost:3001/api/thoughts/:thoughtId`
![getting thought by id](/images/image8.PNG)

## Updating Existing Thought
To update an existing though you will need to make a put request to the following route `localhost:3001/api/thoughts/:thoughtId`
![update thought](/images/image9.PNG)
You will need to replace the `:thoughtId` with the actual thought ID.

## Adding a reaction
To add a reaction to a thought you will need to make a post request to the following route `localhost:3001/api/thoughts/:thoughtId/reactions`
![adding reaction](/images/image10.PNG)
You will need to replace `:thoughtId` with the actual thoughts ID.

## Deleting a reaction
To delete a reaction you will need to make a delete request to the following route `localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`
![deleting a reaction](/images/image11.PNG)
You will need to replace `:thoughtId and :reactionId` with the actual ID's.

## Deleting a Thought
To delete a thought you will need to make a delete request to the following route `localhost:3001/api/thoughts/:thoughtId`
![deleting a thought](/images/image12.PNG)
You will need to replace `:thoughtId` with the actual thought ID.

## Deleting an Existing User
To delete an existing user you will need to make a delete request to the following route `localhost:3001/api/users/:userId`
![deleting a user](/images/image13.PNG)
You will need to replace the `:userId` with the actual User's id.

You now know how to use this Social Network API. Thank you for your time.