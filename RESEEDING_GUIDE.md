# Database Re-seeding Guide for LUXORA

## Quick Start

After updating product prices to INR and images to Unsplash, you need to re-seed the database.

## Steps

### 1. Navigate to Backend Directory
```powershell
cd c:\Users\Asus\Desktop\3d-Portfolio\projects\mern-ecommerce\backend
```

### 2. Run the Seed Script
```powershell
node seed/seed.js
```

OR if you have a seed command in package.json:
```powershell
npm run seed
```

## What Gets Updated

When you run the seed script, the following data will be updated:

✅ **100 Products** with:
- INR prices (₹830 to ₹1,45,167)
- Real Unsplash product images
- Updated thumbnails

## Expected Output

You should see console logs showing:
```
Products seeded successfully with INR prices and updated images
```

## Verification Steps

After re-seeding:

1. **Start the backend server**:
   ```powershell
   cd backend
   npm start
   # or
   node index.js
   ```

2. **Start the frontend**:
   ```powershell
   cd frontend
   npm start
   ```

3. **Test the application**:
   - Visit homepage
   - Check product cards show ₹ symbol
   - Verify images load from Unsplash
   - Add items to cart
   - Check cart totals in INR
   - Test checkout process

## Troubleshooting

### If images don't load:
- Check internet connection (Unsplash requires internet)
- Verify Unsplash URLs are accessible
- Check browser console for errors

### If prices show as NaN:
- Clear browser cache
- Restart frontend dev server
- Check that toLocaleString('en-IN') is supported

### If seed fails:
- Ensure MongoDB is running
- Check database connection string
- Verify Product model schema matches seed data

## Database Connection

Make sure your MongoDB connection is active:
- Local: `mongodb://localhost:27017/mern-ecommerce`
- Or your custom connection string in `.env` file

## Backup Note

A backup of original product data was created:
- `backend/seed/Product.backup.js`

If you need to restore original USD prices, copy the backup back to Product.js.

## Price Format Examples

After seeding, you should see:
- ₹1,079 (one thousand seventy-nine)
- ₹45,567 (forty-five thousand five hundred sixty-seven)
- ₹1,03,667 (one lakh three thousand six hundred sixty-seven)
- ₹1,45,167 (one lakh forty-five thousand one hundred sixty-seven)

## Next Steps

1. Re-seed database with updated data
2. Test all product pages
3. Verify cart calculations
4. Test checkout flow
5. Check order history displays correctly

---

**Note**: This is a one-time process. Once seeded, the database will maintain INR prices and Unsplash images until manually updated again.
