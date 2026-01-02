import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/POSdb";

/* =========================
   DATABASE CONNECTION
========================= */
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI); // no options needed in Mongoose 7+
    console.log("MongoDB Compass has been Connected Successfully");
  } catch (error) {
    console.error("MongoDB Compass Connection Failed:", error.message);
    process.exit(1);
  }
};

/* =========================
   USER SCHEMA
========================= */
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "staff"],
      default: "staff",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);

/* =========================
   CATEGORY SCHEMA
========================= */
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);

/* =========================
   PRODUCT SCHEMA
========================= */
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: false, // Make optional to prevent crashes
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      default: "/default-food.png", // fallback image
    },
  },
  { timestamps: true }
);

// ✅ Export Product so it can be imported elsewhere
export const Product = mongoose.model("Product", productSchema);


