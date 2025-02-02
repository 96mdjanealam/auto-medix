"use server";

import bcrypt from "bcrypt";
import dbConnect from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) return { success: false };

  // validation
  const user = await dbConnect("users").findOne({ email: email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    payload.password = hashedPassword;
    const result = await dbConnect("users").insertOne(payload);
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  }
  return { message: "user already exist" };
};
