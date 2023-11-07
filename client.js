const {kafka, Kafka} = require('kafkajs');

exports.kafka = new Kafka({
    clientId : 'Test-App-Uber',
    brokers : ["localhost:9092"],
});