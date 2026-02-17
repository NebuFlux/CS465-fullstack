const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

// Method to set password
userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Method to validate password
userSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, 'sha512').toString('hex');
        return this.hash === hash;
};

// Method to generate JWT
userSchema.methods.generateJWT = function() {
    return jwt.sign(
        {   // Payload for JWT
            _id: this._id,
            email: this.email,
            name: this.name,
        },
        process.env.JWT_SECRET, // Secret key for signing the JWT
        { expiresIn: '1h' }); // Token expiration time 1 hour
};

const User = mongoose.model('users', userSchema);

module.exports = User;