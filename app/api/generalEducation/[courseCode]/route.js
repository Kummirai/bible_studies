// app/api/your-endpoint/route.js
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { courseCode } = await params;

  try {
    const client = await clientPromise;
    const db = client.db("theology");
    const collection = db.collection("general_education");

    const data = await collection.find({ "course.code": courseCode }).toArray();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Error fetching data" },
      { status: 500 }
    );
  }
}
