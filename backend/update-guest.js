require('dotenv').config()
const mongoose = require('mongoose')
const User = require('./models/User')

async function updateGuestUser() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to DB')

        // Delete existing guest user if exists
        await User.deleteOne({ email: 'guest@mernshop.com' })
        
        // Create new guest user with correct password
        const guestUser = new User({
            _id: "65c2526fdcd9253acfbaa732",
            name: "Guest User",
            email: "guest@mernshop.com",
            password: '$2a$10$UQXCqy4uEUCAfZqnGF0Ex.ag4xrW7CIqrtkrnjEr6t8lmXQLPJ8EO',
            isVerified: true,
            isAdmin: false,
            isGuest: true,
        })

        await guestUser.save()
        console.log('Guest user created successfully')
        
        process.exit(0)
    } catch (error) {
        console.error('Error:', error)
        process.exit(1)
    }
}

updateGuestUser()
