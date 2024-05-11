import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Property from "../../lib/property";
export async function GET(req: NextRequest) {
  try {
    const db: string = process.env.NEXT_PUBLIC_DATABASE_URL as string;
    await mongoose.connect(db);
    const properties = await Property.find();
    return NextResponse.json({ success: 1, properties });
  } catch (error) {
    return NextResponse.json({ success: 0, error });
  }
}
