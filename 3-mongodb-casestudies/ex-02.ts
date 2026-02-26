import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoUri = process.env.MONGODB_URI as string;
if (!mongoUri) {
  console.error("MONGODB_URI not found in environment variables");
  process.exit(1);
}

const dbName = "catalog";
const collectionName = "products";

interface Product {
  name: string;
  cuisine: string;
  price: number;
  tags: string[];
  available: boolean;
}
async function main() {
  const client = new MongoClient(mongoUri);
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection<Product>(collectionName);

    //AI generated product data
    const sampleProducts = [
      { name: "Pad Thai", cuisine: "Asian", price: 9.50, tags: ["vegan", "gluten-free"], available: true },
      { name: "Green Curry", cuisine: "Asian", price: 10.00, tags: ["spicy", "vegetarian"], available: true },
      { name: "Sushi Roll", cuisine: "Asian", price: 12.00, tags: ["seafood", "raw"], available: false },
      { name: "Kimchi Fried Rice", cuisine: "Asian", price: 8.50, tags: ["spicy", "vegan"], available: true },
      { name: "Margherita Pizza", cuisine: "Italian", price: 11.00, tags: ["vegetarian", "cheese"], available: true },
      { name: "Carbonara", cuisine: "Italian", price: 13.00, tags: ["pasta", "creamy"], available: true },
      { name: "Lasagna", cuisine: "Italian", price: 14.00, tags: ["pasta", "meat"], available: true },
      { name: "Tiramisu", cuisine: "Italian", price: 6.00, tags: ["dessert", "coffee"], available: true },
      { name: "Burger", cuisine: "American", price: 10.50, tags: ["beef", "bun"], available: true },
      { name: "Fries", cuisine: "American", price: 4.00, tags: ["potato", "fried"], available: true },
      { name: "Hot Dog", cuisine: "American", price: 7.00, tags: ["sausage", "bun"], available: false },
      { name: "Milkshake", cuisine: "American", price: 5.50, tags: ["dessert", "milk"], available: true },
      { name: "Tacos", cuisine: "Mexican", price: 9.00, tags: ["spicy", "corn"], available: true },
      { name: "Enchiladas", cuisine: "Mexican", price: 11.00, tags: ["cheese", "sauce"], available: true },
      { name: "Quesadilla", cuisine: "Mexican", price: 8.00, tags: ["cheese", "tortilla"], available: true },
      { name: "Guacamole", cuisine: "Mexican", price: 6.00, tags: ["avocado", "dip"], available: true },
      { name: "Falafel Wrap", cuisine: "Middle Eastern", price: 8.50, tags: ["vegan", "chickpea"], available: true },
      { name: "Hummus Plate", cuisine: "Middle Eastern", price: 7.00, tags: ["vegan", "dip"], available: true },
      { name: "Shawarma", cuisine: "Middle Eastern", price: 12.00, tags: ["meat", "spicy"], available: true },
      { name: "Baklava", cuisine: "Middle Eastern", price: 5.00, tags: ["dessert", "nuts"], available: true },
      { name: "Pad See Ew", cuisine: "Asian", price: 9.00, tags: ["noodles", "soy"], available: true },
      { name: "Ramen", cuisine: "Asian", price: 11.00, tags: ["noodles", "broth"], available: true },
      { name: "Pasta Primavera", cuisine: "Italian", price: 12.00, tags: ["pasta", "vegetarian"], available: true },
      { name: "Risotto", cuisine: "Italian", price: 13.50, tags: ["rice", "creamy"], available: true },
      { name: "BBQ Ribs", cuisine: "American", price: 15.00, tags: ["meat", "smoky"], available: true },
      { name: "Chicken Wings", cuisine: "American", price: 9.00, tags: ["chicken", "spicy"], available: true },
      { name: "Burrito", cuisine: "Mexican", price: 10.00, tags: ["rice", "beans"], available: true },
      { name: "Chili", cuisine: "Mexican", price: 8.50, tags: ["beans", "spicy"], available: true },
      { name: "Kebab", cuisine: "Middle Eastern", price: 10.50, tags: ["meat", "grilled"], available: true },
      { name: "Tabouli", cuisine: "Middle Eastern", price: 7.50, tags: ["salad", "parsley"], available: true },
      { name: "Tofu Buddha Bowl", cuisine: "Asian", price: 12.00, tags: ["vegan", "tofu"], available: true }
      , { name: "Old Special Soup ", cuisine: "Asian", price: 5.00, tags: ["soup", "broth"], available: false }
    ];
    await collection.insertMany(sampleProducts);

    // exercise 2
    await collection.insertOne({
      name: "Spring Rolls",
      cuisine: "Asian",
      price: 9.5,
      tags: ["vegan", "gluten-free"],
      available: true,
    });

    const results0 = await collection
      .find({ price: { $lt: 12 } }, { projection: { name: 1, price: 1 } })
      .toArray();

    const results1 = await collection.updateOne(
      { name: "Tofu Buddha Bowl" },
      { $set: { price: 11.0 }, $push: { tags: { $each: ["popular"] } } }
    );

    const results2 = await collection.deleteOne({ name: "Old Special Soup " });

    console.log({ results0, results1, results2 });
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

main().catch((err) => console.error(err));
/*[dotenv@17.3.1] injecting env (0) from .env -- tip: 🔐 encrypt with Dotenvx: https://dotenvx.com
Connected to MongoDB
{
  results0: [
    {
      _id: new ObjectId('699ffb98f79735836251a03e'),
      name: "Pad Thai",
      price: 9.5,
    }, {
      _id: new ObjectId('699ffb98f79735836251a03f'),
      name: "Green Curry",
      price: 10,
    }, {
      _id: new ObjectId('699ffb98f79735836251a041'),
      name: "Kimchi Fried Rice",
      price: 8.5,
    }, {
      _id: new ObjectId('699ffb98f79735836251a042'),
      name: "Margherita Pizza",
      price: 11,
    }, {
      _id: new ObjectId('699ffb98f79735836251a045'),
      name: "Tiramisu",
      price: 6,
    }, {
      _id: new ObjectId('699ffb98f79735836251a046'),
      name: "Burger",
      price: 10.5,
    }, {
      _id: new ObjectId('699ffb98f79735836251a047'),
      name: "Fries",
      price: 4,
    }, {
      _id: new ObjectId('699ffb98f79735836251a048'),
      name: "Hot Dog",
      price: 7,
    }, {
      _id: new ObjectId('699ffb98f79735836251a049'),
      name: "Milkshake",
      price: 5.5,
    }, {
      _id: new ObjectId('699ffb98f79735836251a04a'),
      name: "Tacos",
      price: 9,
    }, {
      _id: new ObjectId('699ffb98f79735836251a04b'),
      name: "Enchiladas",
      price: 11,
    }, {
      _id: new ObjectId('699ffb98f79735836251a04c'),
      name: "Quesadilla",
      price: 8,
    }, {
      _id: new ObjectId('699ffb98f79735836251a04d'),
      name: "Guacamole",
      price: 6,
    }, {
      _id: new ObjectId('699ffb98f79735836251a04e'),
      name: "Falafel Wrap",
      price: 8.5,
    }, {
      _id: new ObjectId('699ffb98f79735836251a04f'),
      name: "Hummus Plate",
      price: 7,
    }, {
      _id: new ObjectId('699ffb98f79735836251a051'),
      name: "Baklava",
      price: 5,
    }, {
      _id: new ObjectId('699ffb98f79735836251a052'),
      name: "Pad See Ew",
      price: 9,
    }, {
      _id: new ObjectId('699ffb98f79735836251a053'),
      name: "Ramen",
      price: 11,
    }, {
      _id: new ObjectId('699ffb98f79735836251a057'),
      name: "Chicken Wings",
      price: 9,
    }, {
      _id: new ObjectId('699ffb98f79735836251a058'),
      name: "Burrito",
      price: 10,
    }, {
      _id: new ObjectId('699ffb98f79735836251a059'),
      name: "Chili",
      price: 8.5,
    }, {
      _id: new ObjectId('699ffb98f79735836251a05a'),
      name: "Kebab",
      price: 10.5,
    }, {
      _id: new ObjectId('699ffb98f79735836251a05b'),
      name: "Tabouli",
      price: 7.5,
    }, {
      _id: new ObjectId('699ffb98f79735836251a05c'),
      name: "Tofu Buddha Bowl",
      price: 11,
    }, {
      _id: new ObjectId('699ffb99f79735836251a05e'),
      name: "Spring Rolls",
      price: 9.5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bcfb'),
      name: "Pad Thai",
      price: 9.5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bcfc'),
      name: "Green Curry",
      price: 10,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bcfe'),
      name: "Kimchi Fried Rice",
      price: 8.5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bcff'),
      name: "Margherita Pizza",
      price: 11,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd02'),
      name: "Tiramisu",
      price: 6,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd03'),
      name: "Burger",
      price: 10.5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd04'),
      name: "Fries",
      price: 4,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd05'),
      name: "Hot Dog",
      price: 7,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd06'),
      name: "Milkshake",
      price: 5.5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd07'),
      name: "Tacos",
      price: 9,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd08'),
      name: "Enchiladas",
      price: 11,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd09'),
      name: "Quesadilla",
      price: 8,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd0a'),
      name: "Guacamole",
      price: 6,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd0b'),
      name: "Falafel Wrap",
      price: 8.5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd0c'),
      name: "Hummus Plate",
      price: 7,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd0e'),
      name: "Baklava",
      price: 5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd0f'),
      name: "Pad See Ew",
      price: 9,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd10'),
      name: "Ramen",
      price: 11,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd14'),
      name: "Chicken Wings",
      price: 9,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd15'),
      name: "Burrito",
      price: 10,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd16'),
      name: "Chili",
      price: 8.5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd17'),
      name: "Kebab",
      price: 10.5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd18'),
      name: "Tabouli",
      price: 7.5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd1a'),
      name: "Old Special Soup ",
      price: 5,
    }, {
      _id: new ObjectId('699ffbb20f893920f901bd1b'),
      name: "Spring Rolls",
      price: 9.5,
    }
  ],
  results1: {
    acknowledged: true,
    modifiedCount: 1,
    upsertedId: null,
    upsertedCount: 0,
    matchedCount: 1,
  },
  results2: {
    acknowledged: true,
    deletedCount: 1,
  },
}

 */