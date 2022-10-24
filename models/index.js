//All this file is responsible for right now is importing the User model and exporting an object with it as a property
const User = require('./user');
const Post = require('./post');

//create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };