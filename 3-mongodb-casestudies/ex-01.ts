import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGODB_URI as string;
if (!mongoUri) {
  console.error('MONGODB_URI not found in environment variables');
  process.exit(1);
}

const dbName = 'movieFlix';
const collectionName = 'movies';

async function runAggregation() {
  const client = new MongoClient(mongoUri);
  await client.connect()

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  const pipeline = [
    //1. Write an aggregation pipeline to find average rating per genre in 2024, including only genres with >10,000 total views. Output should show genre, average rating (rounded), and total views.
    { $match: { year: 2024 } },
    {
      $group: {
        _id: "$genre",
        total: { $sum: "$views" },
        avg: { $avg: "$rating" }

      }
    },
    {
      $match: { total: { $gt: 10000 } }
    }

  ]

  const results = await collection.aggregate(pipeline).toArray();
  console.log('Aggregation Results:', results);
  client.close();
}

runAggregation();

/*
error: script "tsr" exited with code 1
❯ bun run tsr ex-01.ts
$ sh -c 'bun x tsc --noEmit && bun run "$1"' -- "ex-01.ts"
[dotenv@17.3.1] injecting env (0) from .env -- tip: 🔐 encrypt with Dotenvx: https://dotenvx.com
Aggregation Results: [
  {
    _id: "Thriller",
    total: 256851,
    avg: 8.3,
  }, {
    _id: "Horror",
    total: 471718,
    avg: 7.95,
  }, {
    _id: "Action",
    total: 400347,
    avg: 7.300000000000001,
  }, {
    _id: "Fantasy",
    total: 154214,
    avg: 8.6,
  }
]
*/