import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGODB_URI as string;
if (!mongoUri) {
  console.error("MONGODB_URI not found in environment variables");
  process.exit(1);
}

const dbName = "bank"

async function main() {
  const client = new MongoClient(mongoUri);
  try {
    await client.connect();
    const db = client.db(dbName);
    const accountsCollection = db.collection("accounts");
    const transactionsCollection = db.collection("transactions");

    const id1 = new ObjectId("665f4d7e8b3e6c1e24a7b3e4");
    const id2 = new ObjectId("665f4d7e8b3e6c1e24a7b3e5");
    try{

      const results0 = await accountsCollection.insertMany([
        {
          "_id": id1,
          "name": "Alice",
          "balance": 500.00
        },
        {
          "_id": id2,
          "name": "Bob",
          "balance": 1000.00
        }
      ]);
    }catch (error) {
      console.log("Accounts already exist, skipping insertion.");
    }

    const session = client.startSession();

    const transferAmount = 200.00;

    await session.withTransaction(async () => {
     
      
      const updateResult1 = await accountsCollection.updateOne(
        { _id: id1 },
        { $inc: { balance: -transferAmount } },
        { session }
      );

       const updateResult2 = await accountsCollection.updateOne(
        {_id: id2 },
        { $inc: { balance: transferAmount } },
        { session }
      );

      const transactionResult = await transactionsCollection.insertOne(
        {
          from: id1,
          to: id2,
          name: "refund",
          amount: transferAmount,
          date: new Date()
        },
        { session }
      );

      console.log({ updateResult1, updateResult2, transactionResult });
    });
    session.endSession();
  }catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
  
}

main().catch(console.error);

/*


$ sh -c 'bun x tsc --noEmit && bun run "$1"' -- "ex-03.ts"
[dotenv@17.3.1] injecting env (0) from .env -- tip: ⚙️  enable debug logging with { debug: true }
Accounts already exist, skipping insertion.
{
  updateResult1: {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  },
  updateResult2: {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  },
  transactionResult: {
    acknowledged: true,
    insertedId: new ObjectId('69a020fff4f87dfb0910a274'),
  },
}

*/