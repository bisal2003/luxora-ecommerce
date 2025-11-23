## LUXORA - Premium E-Commerce Platform

**LUXORA** is a premium full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). Featuring a sophisticated black-gold luxury theme, Redux Toolkit for state management, and Material UI for an elegant interface, this platform delivers a premium shopping experience with real product images and INR pricing.

Transformed into a luxury brand with:
- 🎨 Premium black-gold UI/UX design
- 💰 Indian Rupee (₹) pricing with proper formatting
- 📸 High-quality real product images from Unsplash
- ✨ Luxurious animations and glass morphism effects
- 🛍️ Complete e-commerce functionality


# **Features**

### **User:**
- **Product Reviews:**
  - Write, edit, and delete reviews.
  - Instant updates on ratings and star percentages.
  
- **Wishlist:**
  - Add, remove, and annotate products with personalized notes.
  
- **Order Management:**
  - Create new orders and view order history.
  
- **Profile Management:**
  - Manage email, username, and multiple addresses.
  
- **Shopping Cart:**
  - Add products, adjust quantities, and view subtotals.

### **Admin:**
- **Product Management:**
  - Add, edit, delete, and soft-delete products.
  - Manage product attributes like name and stock.
  
- **Order Management:**
  - View and update order details and status.

### **Security & User Experience:**
- **Secure Authentication:**
  - Login, signup, OTP verification, password reset, and logout.

- **Intuitive Interface:**
  - Powered by Material UI for a visually appealing and user-friendly experience.

### **Scalability:**
- **Built for Growth:**
  - Scalable architecture to handle increasing user demands.


# **Project Setup**

### Prerequisites
- Node.js ( version v21.1.0 or later )
- MongoDB installed and running locally

### Project Setup

Navigate to the project directory

```bash
  cd luxora-ecommerce
```

### Install dependencies for frontend and backend separately
**Tip:** To efficiently install dependencies for both frontend and backend simultaneously, use split terminals.

Install frontend dependencies
```bash
cd frontend
npm install
```

Install backend dependencies

```bash
cd backend
npm install
```


### Environment Variables
**Backend**
- Create a `.env` file in the `backend` directory.
- Add the following variables with appropriate values
```bash
# Database connection string
MONGO_URI="mongodb://localhost:27017/your-database-name"

# Frontend URL (adjust if needed)
ORIGIN="http://localhost:3000"

# Email credentials for sending password resets and OTPs
EMAIL="your-email@example.com"
PASSWORD="your-email-password"

# Token and cookie expiration settings
LOGIN_TOKEN_EXPIRATION="30d"  # Days
OTP_EXPIRATION_TIME="120000"  # Milliseconds
PASSWORD_RESET_TOKEN_EXPIRATION="2m"  # Minutes
COOKIE_EXPIRATION_DAYS="30"    # Days

# Secret key for jwt security
SECRET_KEY="your-secret-key"

# Environment (production/development)
PRODUCTION="false" # Initially set to false for development
```

**Frontend**
- Create a `.env` file in the `frontend` directory
- Add the following variable:
```bash
# Backend URL (adjust if needed)
REACT_APP_BASE_URL="http://localhost:8000" 
```

**Important**
- Replace all placeholders (e.g., your_database_name, your_email) with your actual values.
- Exclude the `.env` file from version control to protect sensitive information.

### Data seeding
- **Get started quickly with pre-populated data**: Populate your database with sample users, products, reviews, and carts, enabling you to test functionalities without manual data entry.

**Steps**:
- Open a new terminal window.
- Navigate to the `backend` directory: `cd backend`
- Run the seeding script: `npm run seed` ( This script executes the `seed.js` file within the `seed` subdirectory equivalent to running `node seed/seed.js` )
### Running Development Servers

**Important:**

- **Separate terminals**: Run the commands in separate terminal windows or use `split terminal` to avoid conflicts.
- **Nodemon required**: Ensure you have `nodemon` installed globally to run the backend development servers using `npm run dev`. You can install it globally using `npm install -g nodemon`.

#### Start the backend server
- Navigate to the `backend` directory: `cd backend`
- Start the server: `npm run dev` (or npm start)
- You should see a message indicating the server is running, usually on port 8000.
     
#### Start the frontend server:
- Navigate to the `frontend` directory: `cd frontend`
- Start the server: `npm start`
- You should see a message indicating the server is running, usually on port 3000.

### Login with demo account (Optional)
- After successfully seeding the database, you can now explore the application's functionalities using pre-populated sample data.
- here are the `login credentials`
```bash
  email: demo@gmail.com
  pass: helloWorld@123
```

- **Please Note**: While the demo account provides a convenient way to explore many features, it has some limitations:
    - **Password Reset and OTP Verification**: Due to security reasons, the demo account uses a non-real email address. Therefore, password reset and OTP verification functionalities are not available for this account.

    **What this means**:
    - You cannot request a password reset or receive verification codes on the demo email address.
    - To test password reset and OTP verification flows, you need to create a genuine account with a valid email address.

    **What to do?**
    - If you're primarily interested in exploring other functionalities like wishlist, cart, and order history, the demo account is sufficient.
    - To test password reset and OTP verification, create a personal account with a valid email address.
### Accessing the Application
Once both servers are running, you can access them at the following URL's:
- Backend: http://localhost:8000
- Frontend: http://localhost:3000


## Author
Built and transformed by **Bisal Prasad**

---

*Original MERN e-commerce template enhanced and transformed into LUXORA - a premium luxury shopping platform.*
