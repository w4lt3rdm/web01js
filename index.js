const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});
 

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('cliente conectado vieja!');
});

client.on('message', async (message) => {
	if (message.body === 'Hola mundo') {
		await message.reply('hola vieja soy un bot');
	}
});

client.initialize();
 