const userModel = require('./user.model');
class User {
    saveUser(req, res) {
        var newUser = new userModel({
            'username': req.body.username
        });
        newUser.save((err, user) => {
            if (err) {
                res.status(400).send(err);
            }
            res.json(user)
        });
    }
}

module.exports = new User()