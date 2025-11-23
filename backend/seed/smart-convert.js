// Smart conversion script - reads original USD prices and converts to INR
const fs = require('fs');
const path = require('path');

const USD_TO_INR = 83;

// Read the Product.js file
const productFilePath = path.join(__dirname, 'Product.js');
let content = fs.readFileSync(productFilePath, 'utf8');

// Create a backup
const backupPath = path.join(__dirname, 'Product.backup.js');
fs.writeFileSync(backupPath, content, 'utf8');
console.log('✅ Backup created: Product.backup.js');

// Mapping of category-specific real product images from Unsplash
const categoryImages = {
  // Electronics - Smartphones
  smartphone: [
    "https://images.unsplash.com/photo-1678652197950-0a6f249f4320?w=800&q=80", // iPhone
    "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80", // Samsung
    "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80", // OPPO
    "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80", // Huawei
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80", // Generic phone
  ],
  
  // Electronics - Laptops
  laptop: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80", // MacBook
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80", // Samsung laptop
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80", // Surface
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80", // Generic laptop
  ],
  
  // Beauty - Perfumes
  perfume: [
    "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80",
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
  ],
  
  // Beauty - Skincare
  skincare: [
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
    "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=800&q=80",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
  ],
  
  // Fashion - Women's Clothing
  womensClothing: [
    "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
    "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
  ],
  
  // Fashion - Men's Clothing
  mensClothing: [
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
  ],
  
  // Shoes
  shoes: [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    "https://images.unsplash.com/photo-1584735175097-719d848f8449?w=800&q=80",
  ],
  
  // Accessories - Watches
  watches: [
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80",
    "https://images.unsplash.com/photo-1587836374058-4ec0d9f1b42f?w=800&q=80",
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80",
  ],
  
  // Accessories - Bags
  bags: [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
  ],
  
  // Accessories - Jewelry
  jewelry: [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80",
  ],
  
  // Accessories - Sunglasses
  sunglasses: [
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80",
  ],
  
  // Home & Furniture
  furniture: [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80",
  ],
  
  // Home Decoration
  homeDecoration: [
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=800&q=80",
    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
  ],
  
  // Groceries
  groceries: [
    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&q=80",
    "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&q=80",
  ],
  
  // Automotive
  automotive: [
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
  ],
  
  // Lighting
  lighting: [
    "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&q=80",
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80",
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80",
  ],
  
  // Default
  default: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
  ]
};

// Replace prices: find "price: NUMBER," and convert
const pricePattern = /price:\s*(\d+),/g;
const conversions = [];

content = content.replace(pricePattern, (match, usdPrice) => {
  const usd = parseInt(usdPrice);
  const inr = Math.round(usd * USD_TO_INR);
  conversions.push({ usd, inr });
  return `price: ${inr}, // ₹${inr.toLocaleString('en-IN')} (was $${usd})`;
});

console.log(`✅ Converted ${conversions.length} prices from USD to INR`);

// Replace image URLs from dummyjson.com to Unsplash
// Strategy: Replace all dummyjson URLs with a varied selection from categoryImages
let imageCounter = 0;
const allImages = Object.values(categoryImages).flat();

content = content.replace(/https:\/\/cdn\.dummyjson\.com\/[^\s"]+/g, () => {
  const image = allImages[imageCounter % allImages.length];
  imageCounter++;
  return image;
});

console.log(`✅ Replaced ${imageCounter} image URLs with Unsplash images`);

// Write the updated content back
fs.writeFileSync(productFilePath, content, 'utf8');

console.log('\n✅ Product.js updated successfully!');
console.log(`📦 Total products processed: ${conversions.length}`);
console.log(`💰 Price range: ₹${Math.min(...conversions.map(c => c.inr)).toLocaleString('en-IN')} - ₹${Math.max(...conversions.map(c => c.inr)).toLocaleString('en-IN')}`);
console.log('\n📸 All images updated with real product photos from Unsplash');
console.log('\nSample conversions:');
conversions.slice(0, 5).forEach(({usd, inr}) => {
  console.log(`  $${usd} → ₹${inr.toLocaleString('en-IN')}`);
});
