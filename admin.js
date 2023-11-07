const {kafka} = require('./client');

async function init()
{
    const admin = kafka.admin();

    console.log("admin connecting");
    admin.connect();
    console.log("admin connected");


    console.log("creating topics - [Rider-updates]");
    await admin.createTopics({
        topics : [{
            topic: 'Rider-updates',
            numPartitions: 2,
        }]
    })
    console.log("topics created");

    console.log("admin disconnecting");
    await admin.disconnect();
    console.log("admin disconnected");
}

init()

