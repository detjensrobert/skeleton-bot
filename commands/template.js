const Discord = require('discord.js');
const { log } = require('../utils/log.js')

const options = {

	name: 'CMD_NAME',
	aliases: ['ALIAS1', 'A2'],

	usage: 'USAGE',

	description: 'DESCRIPTION',

	cooldown: 3,
	minArgs: MIN_ARGS,
	
	roleRestrict: 'ROLE_NAME',
};

async function execute(message, args, db) {
	const config = message.client.config;
	
	log('INFO', "Executing template command...");
	
}

module.exports = options;
module.exports.execute = execute;
