import dbConnect, { dbCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;

  const data = await dbConnect(dbCollection.services).findOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json(data)
};
