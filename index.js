const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth()
});

// Generate and display the QR Code for authentication
client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Scan this QR code with WhatsApp to log in.');
});

// Notify when the bot is ready
client.on('ready', () => {
    console.log('WhatsApp bot is ready!');
});

// Handle incoming messages
client.on('message', async (message) => {
    try {
        // Log received messages for debugging
        console.log(`Received: ${message.body}`);

        // "Hi" or "හායි"
        if (message.body.toLowerCase() === 'hi' || message.body.toLowerCase() === 'හායි') {
            await message.reply('ආ පැටියෝ! කොහොමද? මම තමයි Whatsapp Bot.');
        }
        // "How are you?" or "කොහොමද"
        else if (message.body.toLowerCase() === 'how are you' || message.body.toLowerCase() === 'කොහොමද') {
            await message.reply('මම හොඳින්! ඔයාට කොහොමද? 😊');
        }
        // "Bye" or "බායි"
        else if (message.body.toLowerCase() === 'bye' || message.body.toLowerCase() === 'බායි') {
            await message.reply('බායි! පස්සෙ හම්බවෙමු! 👋');
        }
        
        else if (message.body.toLowerCase() === 'http' || message.body.toLowerCase() === '') {
            await message.reply('palayan HTTP yanna');
        }

        
        else {
            //await message.reply('මට තේරෙන්නෙ නැහැ. කරුණාකර තවත් පැහැදිලිව අසන්න.');
        }
    } catch (error) {
        console.error(`Error handling message: ${error.message}`);
    }
});

// Initialize the WhatsApp client
client.initialize();
