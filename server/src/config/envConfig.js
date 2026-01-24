import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
  PORT: process.env.PORT,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
};

export default envConfig;

// PORT: process.env.PORT,    => process.env.<same as .env>
// ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN, => process.env.<same as .env>