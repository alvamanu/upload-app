// pages/api/addData.js
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { db } = await connectToDatabase();
      const data = req.body; // assuming JSON data

      // You should validate your data before inserting into the database
      const response = await db.collection("pictures").insertOne(data);

      res.status(200).json({ message: "Data added successfully", response });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    // Handle any non-POST requests
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
