import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not set.');
  }
  
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    cachedClient = client;
    cachedDb = client.db('cs2-player-data');
    console.log('Connected to MongoDB');
    return { client: cachedClient, db: cachedDb };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  
  if (!name) {
    return NextResponse.json({ error: 'Player name is required' }, { status: 400 });
  }
  
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection(name);
    const data = await collection.find({})
                                 .sort({ _id: -1 })
                                 .limit(10)
                                 .toArray();

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    return NextResponse.json(
      { success: false, message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}