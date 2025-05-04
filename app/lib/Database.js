const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.DATABASE;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function getCollection(collectionName) {
  await client.connect();
  let db = client.db("nextJs");
  return db.collection(collectionName);
}
