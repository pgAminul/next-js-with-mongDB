import { getCollection } from "@/app/lib/Database";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const collection = await getCollection("user");

  const data = await req.json();
  const result = await collection.insertOne(data);
  return NextResponse.json(result);
};

export const GET = async (req) => {
  const collection = await getCollection("user");
  const data = await collection.find().toArray();
  return NextResponse.json(data);
};
