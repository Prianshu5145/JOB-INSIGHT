import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:"dztz5ltuq",
    api_key:"449951597736156",
    api_secret:"0pcPd3jZsq8IStxcxpw4ieU4m8g"
});
export default cloudinary;