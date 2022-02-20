require("dotenv").config();

import { MongoClient, ServerApiVersion } from "mongodb";

const db = "";

const uri2 = `mongodb://${mongodb_username}:${process.env.mongodb_password}@cluster0-shard-00-00.flstk.mongodb.net:27017,cluster0-shard-00-01.flstk.mongodb.net:27017,cluster0-shard-00-02.flstk.mongodb.net:27017/${process.env.mongodb_dbname}?ssl=true&replicaSet=atlas-f6msjo-shard-0&authSource=admin&retryWrites=true&w=majority`;

// Database Name
// const dbName = "bloggyDb";
// const client = new MongoClient(uri);

// const main = async () => {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log("Connected successfully to server");
//   const db = await client.db(dbName);
//   const collection = await db.collection("documents");
//   return collection;
// };

const handler = async (req, res) => {
  console.log("in handlers");
  const client = new MongoClient(uri2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });
  if (req.method === "POST") {
    console.log("in post");
    const { email, message, name } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422),
        json({
          message: "Invalid Data",
        });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    MongoClient.connect(uri2, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    })
      .then(async (client) => {
        await client.db().collection("messages").insertOne(newMessage);
        res
          .status(201)
          .json({ message: "message added to db", message: newMessage });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ message: "error adding message to db collection" });
      })
      .finally(() => {
        client.close();
      });
  }
};

export default handler;
