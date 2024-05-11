import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Property from "../../lib/property";
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  const mergedSet = new Set([...arr1, ...arr2]);
  return Array.from(mergedSet);
}
export async function POST(req: NextRequest) {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_DATABASE_URL as string);
    const reqBody = await req.json();
    const { verified, images } = reqBody;
    let prop: any;
    if (images !== null && verified !== null) {
      if (images === true && verified == true) {
        prop = await Property.find({
          verified,
          image: {
            $ne: "https://cdn.vectorstock.com/i/preview-1x/32/45/no-image-symbol-missing-available-icon-gallery-vector-45703245.jpg",
          },
        });
      } else if (images === false && verified === false) {
        prop = await Property.find();
      } else if (images === true && verified === false) {
        prop = await Property.find({
          image: {
            $ne: "https://cdn.vectorstock.com/i/preview-1x/32/45/no-image-symbol-missing-available-icon-gallery-vector-45703245.jpg",
          },
        });
      } else if (images === false && verified === true) {
        prop = await Property.find({ verified });
      }
    }
    if (images !== null && verified === null) {
      if (images === true) {
        prop = await Property.find({
          image: {
            $ne: "https://cdn.vectorstock.com/i/preview-1x/32/45/no-image-symbol-missing-available-icon-gallery-vector-45703245.jpg",
          },
        });
      } else {
        prop = await Property.find();
      }
    }
    if (images === null && verified !== null) {
      if (verified === true) {
        prop = await Property.find({ verified });
      } else {
        prop = await Property.find();
      }
    }
    return NextResponse.json({ success: 1, properties: prop });
  } catch (error) {
    return NextResponse.json({ success: 0, error });
  }
}
