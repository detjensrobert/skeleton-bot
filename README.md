# BOT_NAME

Short description.

------------

### Overview

Big picture overview of what the bot does.

------------

### Usage
- `!PREFIX COMMAND USAGE`

	Description of the command here. Lorem ipsum dolor et.

------------

### Setup
Main file is `bot.js`.  `npm start` will start the bot.

Bot token goes in `token.json`. Create if not present:
```
{
  "token": "TOKEN HERE"
}
```

MongoDB settings go in `mongodb_config.json`. Create if not present:
```
{
  "host": "HOSTNAME",
  "user": "USERNAME",
  "pass": "PASSWORD",
  "dbname": "DATABASE"
  "port": "PORT" // Optional, will use default (21017) if not specified
}
```
The bot will use collection(s) `COLLECTION`.
