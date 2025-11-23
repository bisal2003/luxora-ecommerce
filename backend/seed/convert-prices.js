// Conversion script to update all prices from USD to INR
const fs = require('fs');
const path = require('path');

const USD_TO_INR = 83;

// Read the Product.js file
const productFilePath = path.join(__dirname, 'Product.js');
let content = fs.readFileSync(productFilePath, 'utf8');

// Product image mappings by category
const imageMap = {
  // Smartphones
  "iPhone 9": {
    thumbnail: "https://images.unsplash.com/photo-1678652197950-0a6f249f4320?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1678652197950-0a6f249f4320?w=800&q=80",
      "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=800&q=80",
      "https://images.unsplash.com/photo-1695048133417-b1a17a0b4679?w=800&q=80",
    ]
  },
  "Samsung Universe 9": {
    thumbnail: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    ]
  },
  "OPPOF19": {
    thumbnail: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    ]
  },
  "Huawei P30": {
    thumbnail: "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    ]
  },
  
  // Laptops
  "MacBook Pro": {
    thumbnail: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80",
    ]
  },
  "Samsung Galaxy Book": {
    thumbnail: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
    ]
  },
  "Microsoft Surface Laptop 4": {
    thumbnail: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    ]
  },
  
  // Perfumes
  "Fog Scent Xpressio Perfume": {
    thumbnail: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
    ]
  },
  "Brown Perfume": {
    thumbnail: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&q=80",
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
    ]
  },
};

// Extract and convert prices
const priceRegex = /price:\s*(\d+)/g;
let match;
const conversions = [];

while ((match = priceRegex.exec(content)) !== null) {
  const usdPrice = parseInt(match[1]);
  const inrPrice = Math.round(usdPrice * USD_TO_INR);
  conversions.push({
    usd: usdPrice,
    inr: inrPrice,
    original: match[0],
    replacement: `price: ${inrPrice}, // ₹${inrPrice.toLocaleString('en-IN')} (converted from $${usdPrice})`
  });
}

console.log(`Found ${conversions.length} prices to convert`);

// Replace all prices
conversions.forEach(conv => {
  // Only replace the first occurrence at a time to maintain structure
  content = content.replace(conv.original, conv.replacement);
});

// Replace dummyjson.com URLs with Unsplash URLs (generic replacements)
content = content.replace(/https:\/\/cdn\.dummyjson\.com\/product-images\/1\//g, 'https://images.unsplash.com/photo-1678652197950-0a6f249f4320?w=800&q=80');
content = content.replace(/https:\/\/cdn\.dummyjson\.com\/product-images\/13\//g, 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80');
content = content.replace(/https:\/\/cdn\.dummyjson\.com\/product-images\/3\//g, 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80');
content = content.replace(/https:\/\/cdn\.dummyjson\.com\/product-images\/4\//g, 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800&q=80');
content = content.replace(/https:\/\/cdn\.dummyjson\.com\/product-images\/5\//g, 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80');
content = content.replace(/https:\/\/cdn\.dummyjson\.com\/product-images\/6\//g, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80');
content = content.replace(/https:\/\/cdn\.dummyjson\.com\/product-images\/7\//g, 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80');
content = content.replace(/https:\/\/cdn\.dummyjson\.com\/product-images\/8\//g, 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=80');

// Replace all remaining dummyjson URLs with general product images
content = content.replace(/https:\/\/cdn\.dummyjson\.com\/product-images\/\d+\/[^"]+/g, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80');

// Write back to file
fs.writeFileSync(productFilePath, content, 'utf8');

console.log('✅ Price conversion complete!');
console.log('✅ Images updated with Unsplash CDN URLs');
console.log(`Total conversions: ${conversions.length}`);
console.log('\nSample conversions:');
conversions.slice(0, 5).forEach(conv => {
  console.log(`  $${conv.usd} → ₹${conv.inr.toLocaleString('en-IN')}`);
});
