const dotenv = require('dotenv'); // Ensure you load environment variables from a .env file
dotenv.config();

module.exports = {
  BCRYPT_ROUNDS: parseInt(process.env.BCRYPT_ROUNDS, 10) || 8, // Ensure it's an integer
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT, 10) || 9000, // Ensure it's an integer
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret', // Use a more descriptive default for better clarity
};
