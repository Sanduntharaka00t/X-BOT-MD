const fs = require('fs');
const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env')) {
  dotenv.config({
    path: './config.env'
  });
}

const API = "https://api-aswin-sparky.koyeb.app";
const HANDLERS = process.env.HANDLER || "@";
const SESSION_ID = process.env.SESSION_ID || "A-S-W-I-N-S-P-A-R-K-Y:69f3365bcca0110b78f1f40b8338485b";
const SUDO = process.env.SUDO || '94728756898';
const AUTO_STATUS_VIEW = process.env.AUTO_STATUS_VIEW || "true";
const ALWAYS_ONLINE = process.env.ALWAYS_ONLINE || "true";
const BOT_INFO = process.env.BOT_INFO || "https://telegra.ph/file/a8f400de01d6c1ec4e742.jpg";
const URL = process.env.URL || "https://whatsapp.com/channel/0029VaglXx3LikgF18gU651T";
const AUDIO_DATA = process.env.AUDIO_DATA || "https://telegra.ph/file/0a776b2a20271ec6d93b4.jpg";
const STICKER_DATA = process.env.STICKER_DATA || "mr.ck";
const WORK_TYPE = process.env.WORK_TYPE || 'public';
const DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";
const HEROKU_APP_NAME = process.env.HEROKU_APP_NAME || "";
const HEROKU_API_KEY = process.env.HEROKU_API_KEY || "";
const KOYEB_API_KEY = process.env.KOYEB_API_KEY || "";


module.exports = {
  API,
  HANDLERS,
  SUDO,
  WORK_TYPE,
  SESSION_ID,
  STICKER_DATA,
  BOT_INFO,
  AUDIO_DATA,
  AUTO_STATUS_VIEW,
  ALWAYS_ONLINE,
  URL,
  HEROKU_API_KEY,
  HEROKU_APP_NAME,
  KOYEB_API_KEY,
  DATABASE_URL: DATABASE_URL,
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
