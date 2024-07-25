//#ENJOY
/**dragon 

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/
dragon
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "yes";
global.video = "yes";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "faustinemeli@gmail.com";
global.location = "TANZANIA.";
global.mongodb = process.env.MONGODB_URI || "true";
global.allowJids = process.env.ALLOW_JID || "255675233245@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "255675233245";
global.sudo = process.env.SUDO || "255675233245";
global.owner = process.env.OWNER_NUMBER || "255675233245";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "true";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID "||"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY05YejZYTDJoRHZMa3BGOFhDUGhVejMwd3Y0WnlsY0pVWnFQV1pRRi8wVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTdqdzBRMEVSVkJ2ay9XREVNS2lraHg3QzlNWWp1Ti8xWWVJTFZ3MGRRRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNSSt4blQ0eklldkcvRXNTVDFWdFFjaFd1UUZ4SDRvYkxIK0VKZTlUVTFvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHVTdxa2JrS0J0TWZHZVNobnhKWEFxTFZBRTRDd0VFTndXUUNzRUVSSjBvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFbzQ1ZHROWkk3ZnZ6UlhLa2gyT2ZlbXRFeU1udG5tdXpnVzA0MytzSDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZuMWdHR0JGRmJmK1VTbGh3b2xUd2VCclFEN1dqVzRRRFhPZnBQeEhRRzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU03eXl5VjUvWkhxbDVuWFZlSW9pcjNqQ2JwQWVWVjRwTFY2bFVtZHEwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDMyRlZxRFN0dGtrM0k2a0lTVklNMEtpUENTTHVIZzBqYXdtWmovbVdEbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlViM1pWdWVuM0VRUi85NFRGdUNBNFU2aTRKaUlvM1JTMEgyTS92aGNyM245TlZCZXhNQ3lYTjZyQ3JOTkhseXZERVMwWno2OHJYMlFONzdPNzVPa2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA3LCJhZHZTZWNyZXRLZXkiOiJVc1BYNFJiejkxYXNuaUNCSkhqWUpMUW84Zkh6b2RQakxHUWhlS1VybUVZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJqR0VYRkpYN1JDYWY5djJVX0pPbk5RIiwicGhvbmVJZCI6ImEwMzUwYmY0LTRlOTAtNGQ4Yy1hMzVjLTYyYjQ4OGE1NWMyNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3NnpJUzVyQ2h3TkdZRCtGVmNGTDZxSXpyQVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieERRTndTTURCeXpnL1BoNXJjTzlBUTdWMFRFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdaVzRRODdKIiwibWUiOnsiaWQiOiIyNTU2NzUyMzMyNDU6MTlAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k3ZzJKb0dFTVhhaGJVR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRVdEJ5Nk03SXZnNjExbXU2cnBDbHN0RS90UkJWUGdIN0k5ZVM2US81ejQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVBd3YyQUxrTmE0Q05Ralc2dEhuWXNRbHlCdGxLR2c5Zk1JdmxJSTVyVnFTQW9OaDNiTENJMXNxSFU2dTlCR0duR2diNTZKMFJXOEtVSUs2eC8wREJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDbGYwKy9TSDlxcWFTTmhmTTNYcHZmOWltT1NrNVJoNEFCVVVTWXpUZ0RwZitGZWJINUdTOHNHR3ZHRlFhL2pyakpvMjVqU2xBUHI0bUNONlpRNDNoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY3NTIzMzI0NToxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiVkxRY3VqT3lMNE90ZFpydXE2UXBiTFJQN1VRVlQ0Qit5UFhrdWtQK2MrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxODU1MzE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJidSJ9"
  "="
module.exports = {
  menu: process.env.MENU || "true",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "The real dragon ANTONY ",
  author: process.env.PACK_AUTHER || "dragon",
  packname: process.env.PACK_NAME || "dragon",
  botname: process.env.BOT_NAME || "dragon bot",
  ownername: process.env.OWNER_NAME || "DRAGON",
  errorChat: process.env.ERROR_CHAT || "25575233245",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "true",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "true",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "dragon",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "40",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "true",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
