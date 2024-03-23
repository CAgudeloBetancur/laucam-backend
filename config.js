import { config } from "dotenv";

config();

export const PORT = process.env.PORT;
export const ATLAS_USER = process.env.ATLAS_USER;
export const DB_NAME = process.env.DB_NAME;
export const ATLAS_PASSWORD = process.env.ATLAS_PASSWORD;
export const BASE_URL = process.env.BASE_URL;
export const ATLAS_APP_NAME = process.env.ATLAS_APP_NAME;