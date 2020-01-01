/**
 * Exports different environment variables
 */
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    atlas_uri: process.env.ATLAS_URI,
    node_env: process.env.NODE_ENV,
    port: process.env.PORT || "http://localhost:5000",
};