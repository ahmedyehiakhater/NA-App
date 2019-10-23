
const User = require('../user/user-model');

const connectDb = () => {
    return mongoose.connect('mongodb://http://localhost:27071/test');
};

const models = { User };

module.exports = models