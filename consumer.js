const { Kafka } = require('kafkajs');
const pool = require('./db');
require('dotenv').config();
const kafka = new Kafka({
clientId: 'tp6-consumer',
brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});
const consumer = kafka.consumer({ groupId: 'test-group' });
const topic = process.env.KAFKA_TOPIC || 'test-topic';
const run = async () => {
await consumer.connect();
await consumer.subscribe({ topic, fromBeginning: true });
 await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const payload = JSON.parse(message.value.toString());

      await pool.query(
        `INSERT INTO kafka_messages(topic, partition, message_offset, message_key, payload)
         VALUES($1,$2,$3,$4,$5)`,
        [
          topic,
          partition,
          message.offset,
          message.key?.toString(),
          payload,
        ]
      );

      console.log("Saved to DB:", payload);
    },
  });
}; run().catch(console.error);