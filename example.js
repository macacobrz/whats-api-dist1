const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('message', async message => {
    let hello_msg = "Olá, bom dia! Aguarde que em breve você será atendido! :) ";
    let msg = message.body.toLowerCase().trim(); 

    console.log("Mensagem recebida: " + msg); 


    // Captura tudo que estiver após "teste" e executa uma ação
    if (msg.includes("teste")) {
        if (msg.startsWith('teste ')) {
            const parametro = msg.slice(6).trim(); // Obtém o valor após "teste "

            // Aqui você pode realizar alguma lógica com o parâmetro
            let resposta = `Exemplo de resposta para ${parametro}`;
            await message.reply(resposta);
        } else {
            await message.reply(hello_msg);
        }
    } else {
        await message.reply(hello_msg);
    }
});

// Iniciar o cliente
client.initialize();
