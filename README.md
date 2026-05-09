# Kafka Streaming Project (Node.js + PostgreSQL + Express)

##  Overview

This project demonstrates a complete real-time data streaming pipeline using **Apache Kafka**, **Node.js**, **PostgreSQL**, and **Express.js**.

It simulates a real-world event-driven architecture where sensor data is produced, streamed through Kafka, consumed, stored in a database, and exposed via a REST API.

---
## Stack
- Apache Kafka
- Node.js (KafkaJS)
- PostgreSQL
- Express.js

## Architecture
Producer → Kafka → Consumer → PostgreSQL → API

## How to run
1. Start Kafka server
2. Run consumer:
   node consumer.js
3. Run producer:
   node producer.js
4. Start API:
   node server.js

##  Producer Execution
Node.js producer sends json data every second 
[producer.js ](img/producer.png)

## Consumer Execution
Consumer reads messages from Kafka topic
[consumer.js ]!(img/consumer.png)
## PostgresSQL storage 
Messages are stored in kafka_messages 
[kafka_messages]!(postgres.png)
## Api testing 
An Express.js API was created to expose stored messages.
### GET all messages : 
http://localhost:3000/messages
[mssages]!(img/messages.png)
### GET message by ID : 
http://localhost:3000/messages/:id
[mssages/id]!(img/msgsid.png)

