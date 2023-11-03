const Thought = require('./Thought');
const User = require('./User');

module.exports = {

//get user
getUsers(req, res) {
    User.find({})
    .populate({
        path: 'thoughts',
        select: '-__v'
    })
    .select('-__v')
    .sort({_id: -1})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.sendStatus(400);
    });
}
//get single user

//create user

//update user

//delete user

//add friend

//delete friend


 }