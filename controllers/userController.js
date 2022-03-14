const { User } = require('../models');

const userCount = async () =>
    User.aggregate()
        .count('userCount')
        .then((numberOfUsers) => numberOfUsers);

const thoughts = async (userId) =>
    User.aggregate([
        {
            $unwind: '$thoughts',
        },
        {
            $group: { _id: userId, allThoughts: { $all: '$thoughts' } },
        },
    ]);   

const friends = async (userId) =>
    User.aggregate([
        {
            $unwind: '$friends',
        },
        {
            $group: { _id: userId, allFriends: { $all: '$friends' } },
        },
    ]);       

module.exports = {
    // get all users
    getUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userObj = {
                    users,
                    userCount: await userCount(),
                };
                return res.json(userObj);
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // get single user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then(async (user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID!' })
                : res.json({
                    user,
                    thoughts: await thoughts(req.params.userId),
                    friends: await friends(req.params.userId),
                })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // update a user
    updateUser({params, body}, res) {
        User.findOneAndUpdate({ _id: params.userId }, body, { runValidators: true, new: true })
            .then((user) =>
            !user
                ? res
                    .status(404)
                    .json({ message: 'No user found with that ID!' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // delete a user
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user found with that ID!' })
                : res.status(200).json({ message: 'User successfully deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },
    // add friend
    addFriend(req, res) {
        console.log('You are adding a friend!');
        console.log(req.body);
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
            !user
                ? res
                    .status(404)
                    .json({ message: 'No user found with that ID!' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // delete a friend
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
            !user
                ? res
                    .status(404)
                    .json({ message: 'No user found with that ID!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
};        