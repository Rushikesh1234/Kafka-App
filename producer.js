const {kafka} = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function init()
{
    const producer = kafka.producer();

    console.log("producer connecting..");
    await producer.connect();
    console.log("producer connected");
    
    rl.setPrompt(">")
    rl.prompt();


    rl.on('line', async function(line) {
        const [riderName, location] = line.split(" ");
        await producer.send({
            topic : 'Rider-updates',
            messages: [
                {
                    partition: location.toLowerCase() === 'north'? 0:1,
                    key: 'location-update', 
                    value: JSON.stringify({name:riderName, location})
                },
            ],   
        });
    }).on('close', async () => {
        console.log("producer disconnecting..");
        await producer.disconnect();
        console.log("producer disconnected");
    });

}

init();