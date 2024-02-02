// pages/api/data.js
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const data = await db.collection("pictures").find({}).toArray();

  res.json(data);
}
