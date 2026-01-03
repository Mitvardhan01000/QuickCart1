import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectDb() {
  // If already connected, reuse it
  if (cached.conn) {
    return cached.conn;
  }

  // Create connection promise only once
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(`${process.env.MONGODB_URI}/quickcart`, opts)
      .then((mongoose) => mongoose);
  }

  // Await connection and cache it
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDb;
