"use server";
import bcrypt from "bcrypt";
import dbConnect, { dbCollection } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
  const { email, password } = payload;

  try { 
    const user = await dbConnect(dbCollection.users).findOne({ email });
    if (!user || !user.password) {
      console.log("User not found or password missing");
      return null;
    }
    console.log("Checking password...");
    const isPasswordOK = await bcrypt.compare(password, user.password);
    
    if (!isPasswordOK) {
      console.log("Incorrect password");
      return null;
    }

    console.log("Login successful");
    return user;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};
