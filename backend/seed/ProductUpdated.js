const Product = require("../models/Product");

// Currency conversion: 1 USD = ₹83 (approximate)
const USD_TO_INR = 83;

const products = [
  {
    _id: "65a7e45902e12c44f599444e",
    title: "iPhone 14 Pro",
    description: "Experience the brilliance of iPhone 14 Pro with advanced camera system and Dynamic Island",
    price: 99900, // ₹99,900 (was $549)
    discountPercentage: 12.96,
    stockQuantity: 14,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://images.unsplash.com/photo-1678652197950-0a6f249f4320?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1678652197950-0a6f249f4320?w=800&q=80",
      "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800&q=80",
      "https://images.unsplash.com/photo-1695048133417-b1a17a0b4679?w=800&q=80",
      "https://images.unsplash.com/photo-1678652197950-0a6f249f4320?w=500&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f599444f",
    title: "Dior Sauvage Eau De Parfum",
    description: "Premium luxury fragrance for men - long lasting and sophisticated scent",
    price: 8990, // ₹8,990 (was $13)
    discountPercentage: 8.14,
    stockQuantity: 21,
    brand: "65a7e20102e12c44f59943e3",
    category: "65a7e24602e12c44f599442e",
    thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=800&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994450",
    title: "Samsung Galaxy S23 Ultra",
    description: "Samsung's flagship with advanced AI camera and stunning AMOLED display",
    price: 103670, // ₹1,03,670 (was $1249)
    discountPercentage: 15.46,
    stockQuantity: 12,
    brand: "65a7e20102e12c44f59943db",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994451",
    title: "OPPO Find X6 Pro",
    description: "Premium smartphone with Hasselblad camera system and 120Hz display",
    price: 24900, // ₹24,900 (was $280)
    discountPercentage: 17.94,
    stockQuantity: 15,
    brand: "65a7e20102e12c44f59943dc",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994452",
    title: "Huawei P60 Pro",
    description: "Advanced camera technology with Leica optics and stunning design",
    price: 41500, // ₹41,500 (was $499)
    discountPercentage: 10.58,
    stockQuantity: 18,
    brand: "65a7e20102e12c44f59943dd",
    category: "65a7e24602e12c44f599442c",
    thumbnail: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994453",
    title: "MacBook Pro M3 14-inch",
    description: "Professional laptop with M3 chip, brilliant Retina display, and all-day battery",
    price: 149900, // ₹1,49,900 (was $1749)
    discountPercentage: 11.02,
    stockQuantity: 10,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994454",
    title: "Samsung Galaxy Book3 Pro",
    description: "Ultra-thin premium laptop with AMOLED display and powerful performance",
    price: 112450, // ₹1,12,450 (was $1499)
    discountPercentage: 15.0,
    stockQuantity: 9,
    brand: "65a7e20102e12c44f59943db",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994455",
    title: "Microsoft Surface Laptop 5",
    description: "Premium Windows laptop with touchscreen, elegant design, and long battery life",
    price: 107900, // ₹1,07,900 (was $1499)
    discountPercentage: 10.23,
    stockQuantity: 11,
    brand: "65a7e20102e12c44f59943de",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994456",
    title: "Infinix INBook X2 Laptop",
    description: "Budget-friendly laptop with premium build and great performance",
    price: 33200, // ₹33,200 (was $399)
    discountPercentage: 11.83,
    stockQuantity: 25,
    brand: "65a7e20102e12c44f59943df",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994457",
    title: "HP Pavilion Gaming Laptop",
    description: "Powerful gaming laptop with RTX graphics and 144Hz display",
    price: 74850, // ₹74,850 (was $899)
    discountPercentage: 6.18,
    stockQuantity: 13,
    brand: "65a7e20102e12c44f59943e0",
    category: "65a7e24602e12c44f599442d",
    thumbnail: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
];

exports.seedProduct = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("Products seeded successfully with INR prices and updated images");
  } catch (error) {
    console.log(error);
  }
};
