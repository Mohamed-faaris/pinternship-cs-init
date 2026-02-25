import { parse } from 'csv-parse/sync';
import { MongoClient } from 'mongodb';
import * as fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'movieFlix';
const collectionName = 'movies';

async function loadMovies() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const csvData = fs.readFileSync('movies_dataset_100.csv', 'utf-8');
    const records = parse(csvData, {
      columns: true,
      skip_empty_lines: true,
    });

    console.log(`Parsed ${records.length} records from CSV`);

    await collection.drop();
    console.log(`Dropped existing '${collectionName}' collection`);

    const result = await collection.insertMany(records);
    console.log(`Inserted ${result.insertedCount} documents into '${collectionName}'`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

loadMovies();
