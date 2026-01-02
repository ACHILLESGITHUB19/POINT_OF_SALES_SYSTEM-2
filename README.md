Point of Sale (POS) System

📘 Disclaimer
This project is developed for school/educational purposes only.
It is not intended for commercial use, production environments, or real-world financial transactions.

🧾 Project Overview
The Point of Sale (POS) System is a web-based application demonstrating fundamental software development concepts:
User authentication with secure hashed passwords and role-based access (Admin & Staff)
Product and category management using MongoDB
Sales transaction simulation
Dashboard visualization for Admin and Staff
MongoDB database integration using Mongoose
This system is a learning tool for students to understand how POS systems work in a controlled academic environment.

🎯 Objectives
Learn and apply full-stack web development concepts
Implement CRUD operations using MongoDB and Mongoose
Understand session handling with JWT and cookies
Implement role-based dashboards for admins and staff
Practice MVC-style project structure and routing

🛠️ Technologies Used
Backend: Node.js, Express.js
Frontend: EJS (Embedded JavaScript Templates)
Database: MongoDB (via Mongoose)
Authentication & Security: bcrypt, JWT, cookie-parser
Environment Management: dotenv
Utilities: csurf for CSRF protection


Install dependencies and devdependencies:
📦 Dependencies
🔹 Production Dependencies
express – Web framework for handling routes and requests
mongoose – MongoDB ODM
ejs – Template engine for dynamic HTML
bcrypt – Password hashing
jsonwebtoken – Token-based authentication
cookie-parser – Parse cookies for sessions
csurf – CSRF protection
dotenv – Load environment variables
🔹 Development Dependency
nodemon – Automatically restarts server during development

👥 User Roles
Admin – Manage products, categories, and view dashboard stats
Staff – Access products and sales dashboard
User (optional) – View products (demo only)
⚙️ Features
User Authentication: Register and login with hashed passwords
JWT & Cookie-Based Sessions: Role-based access for admin/staff dashboards
Admin Dashboard: View total products, total stocks, and total orders
Staff Dashboard: View products and categories
Product & Category Management: Add, update, and view items
Logout: Clears session cookie

🚀 Installation & Setup
Clone the repository:

Bash
git clone https://github.com/ACHILLESGITHUB19/point-of-sale.git

Configure environment variables in .env:
JWT_SECRET=your_secret_key
PORT=9090
Start the development server:


Bash
npm run dev
Open your browser and go to:
http://localhost:9090/login

📱 Device Compatibility
Designed for desktop/laptop use only
Mobile screens are not fully supported
Recommended screen resolution: ≥ 1024px width

📚 Educational Notes
No real payment gateway is integrated
Prices and transactions are for demonstration purposes only
Security is basic and intended for learning

⚠️ Limitations
Not optimized for large-scale use
No real-world accounting compliance
Minimal error handling
Mobile devices not fully supported

👨‍💻 Programmer
ACHILLES
BSIS / College Student
📝 License
This project is free to use for educational and academic purposes only.
 
⚠️ Reminder: Do not deploy or use this system in a real business environment. It is desktop web only. 

Ongoing code and not yet complete 
