import { OPTIMIZED_FONT_PROVIDERS } from "next/dist/shared/lib/constants";
import dbConnect from "../../../library/mongo";
import Food from "../../../models/Food";

export default async function handler(req, res) {
  const { method} = req;

dbConnect();

if (method === "GET") {
     try {
      const foods =  await Food.find({}); // get all the foods
      res.status(200).json(foods);
    } catch (err) {
      res.status(500).json(err);
    }
  }

 if (method === "POST") {
     try {
      const food = await Food.create(req.body);
      res.status(201).json(food);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
