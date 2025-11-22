# Guest User Feature Guide

## Overview
The guest user feature allows visitors to browse products without creating an account. Guest users have restricted access to maintain data integrity and prevent unauthorized transactions.

## Guest User Credentials
- **Email**: guest@mernshop.com
- **Password**: Guest@123

## How to Use Guest Login

### Method 1: "Continue as Guest" Button
1. Navigate to the login page
2. Click the **"Continue as Guest"** button below the regular login form
3. You'll be automatically logged in as a guest user

### Method 2: Manual Login
1. Navigate to the login page
2. Enter the guest credentials:
   - Email: `guest@mernshop.com`
   - Password: `Guest@123`
3. Click "Login"

## Guest User Capabilities

### ✅ What Guests CAN Do:
- Browse all products
- View product details
- See product reviews and ratings
- Navigate through different categories and brands
- Use search and filter functionality
- View product images in the gallery

### ❌ What Guests CANNOT Do:
- **Add items to cart** - Displays toast: "Please login to add items to cart"
- **Add items to wishlist** - Displays toast: "Please login to add items to wishlist"
- **View cart page** - Cart icon hidden in navbar
- **View wishlist page** - Wishlist icon hidden in navbar
- **Access profile settings** - Profile menu option hidden
- **View order history** - Orders menu option hidden
- **Proceed to checkout** - No cart access
- **Write product reviews** - Requires verified user account

## Visual Indicators

### Navbar Changes for Guest Users:
1. **Guest Badge**: A pink "Guest" chip appears next to the user menu icon
2. **Hidden Icons**: Cart and wishlist icons are not visible
3. **Restricted Menu**: Settings menu only shows "Logout" option

## Color Theme Updates

### New Professional Color Scheme:
- **Primary Color**: Indigo (#4F46E5)
- **Secondary Color**: Pink (#EC4899)
- **Background**: Slate (#F8FAFC)
- **Text**: Dark slate for better readability

The new color scheme provides a modern, professional appearance suitable for e-commerce platforms.

## Technical Implementation

### Database Changes:
- Added `isGuest` field to User model (Boolean, default: false)
- Guest user created with ID: `65c2526fdcd9253acfbaa732`

### Frontend Changes:
1. **Login Component**: Added "Continue as Guest" button with auto-fill credentials
2. **Navbar Component**: Conditional rendering based on `userInfo.isGuest`
3. **ProductCard Component**: Disabled cart/wishlist actions for guests
4. **ProductDetails Component**: Disabled cart/wishlist functionality for guests

### Backend Changes:
- User model updated with `isGuest` field
- Seed data includes guest user with proper bcrypt password hash

## Admin Access

For administrative functions, use:
- **Email**: demo@gmail.com
- **Password**: Demo@123

Admin users can:
- Access admin dashboard
- Manage products (add, edit, delete)
- View all orders
- Manage inventory
- Access analytics

## Regular User Registration

To access full features:
1. Click "Sign Up" on the login page
2. Complete registration with email verification
3. Verify your email using the OTP sent to your inbox
4. Login with your credentials
5. Enjoy full shopping capabilities

## Troubleshooting

### Guest Login Not Working:
1. Ensure backend server is running on port 8000
2. Verify MongoDB connection is active
3. Check that guest user exists in database: `db.users.findOne({email: 'guest@mernshop.com'})`
4. If guest user doesn't exist, run: `node update-guest.js` from backend directory

### Toast Notifications Not Appearing:
- Ensure react-toastify is properly configured
- Check browser console for errors
- Verify ToastContainer is rendered in App.js

### Features Not Restricted:
- Clear browser cache and cookies
- Check Redux state for `userInfo.isGuest` flag
- Verify conditional rendering logic in components

## Development Notes

### Adding More Guest Restrictions:
To restrict additional features for guests, follow this pattern:

```javascript
// Import userInfo selector
import { selectUserInfo } from '../../user/UserSlice'

// Use in component
const userInfo = useSelector(selectUserInfo)

// Add conditional logic
if(userInfo?.isGuest) {
    toast.info("Please login to access this feature")
    return
}
```

### Testing Guest Flow:
1. Login as guest using credentials above
2. Verify guest badge appears in navbar
3. Try to add product to cart (should show toast)
4. Try to add product to wishlist (should show toast)
5. Verify cart/wishlist icons are hidden
6. Check settings menu shows only logout
7. Logout and login as regular user to verify normal functionality

## Security Considerations

- Guest user cannot modify their profile
- Guest user cannot make purchases
- Guest user cannot access other users' data
- Session expires on logout like regular users
- Guest credentials are hashed using bcrypt
- JWT tokens work identically for guest and regular users
