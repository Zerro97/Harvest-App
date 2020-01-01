/**
 * Exports different environment variables
 */
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    private_key: process.env.private_key,
    public_key: process.env.public_key,
    atlas_uri: process.env.ATLAS_URI,
    node_env: process.env.NODE_ENV,
    port: process.env.PORT || 5000,
};