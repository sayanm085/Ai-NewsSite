import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
 
 const DB_NAME = process.env.DB_NAME;
 const DATABASE_URL= process.env.DATABASE_URL;

// cloudinary key 
 const CLOUDINARY_CLOUD_NAME= process.env.CLOUDINARY_CLOUD_NAME;
 const CLOUDINARY_API_KEY= process.env.CLOUDINARY_API_KEY;
 const CLOUDINARY_API_SECRET= process.env.CLOUDINARY_API_SECRET;



 //Nodemail Configuration for email sending
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;
const SMTP_USERNAME = process.env.SMTP_USERNAME;
const EMAIL_FROM = process.env.EMAIL_FROM;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;


// JWT Configuration for token generation and verification 
const REFRESH_TOKEN_SECRET= process.env.REFRESH_TOKEN_SECRET;
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;
const ACCESS_TOKEN_SECRET= process.env.ACCESS_TOKEN_SECRET;
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
 
export {
  PORT,
  DB_NAME,
  DATABASE_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  SMTP_PASSWORD,
  SMTP_USERNAME,
  EMAIL_FROM,
  SMTP_HOST,
  SMTP_PORT,


    REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRY,
    ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRY

};