# Kafka-App

This Application is a replica of this tutorial - [https://youtu.be/ZJJHm_bd9Zo?si=H2pX4DPdShT7T6eo]
Just for learning purposes.

## Prerequisite
- Knowledge
  - Node.JS Intermediate level
  - Experience with designing distributed systems
- Tools
  - Node.js: [Download Node.JS](https://nodejs.org/en)
  - Docker: [Download Docker](https://www.docker.com)
  - VsCode: [Download VSCode](https://code.visualstudio.com)

## Commands
- Start Zookeeper Container and expose PORT `2181`.
```bash
docker run -p 2181:2181 zookeeper
```
- Start Kafka Container, expose PORT `9092`, and set up ENV variables.
```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

## Running Locally

- As we have already executed Docker Zookeeper and then executed Kafka in the terminal, we can create producers and consumers now.

- Run Multiple Consumers on multiple terminals - node consumer.js <GROUP_NAME>

- Create Producer on one terminal - node producer.js

