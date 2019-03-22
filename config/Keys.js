module.exports = {
    mongoURI: process.env.MONGODB_URI || "mongodb://localhost/little_gadabots",
    jwtSecret: process.env.JWT_SECRET || "s00persekrit"
}