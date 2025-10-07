💸 FinTrack – Smart Personal Finance Tracker

FinTrack is a full-stack personal finance web app that helps users track income, expenses, and insights effortlessly.
Upload your bank or credit card statements in CSV format and get real-time visual analytics on your spending habits.
Designed for simplicity, accuracy, and clean UI — perfect for managing your finances or showcasing full-stack skills.

🚀 Tech Stack

Frontend:

⚛️ React.js

🎨 Tailwind CSS

📊 Recharts (data visualization)

🌙 React Toastify (notifications)

Backend:

🧩 Node.js + Express.js

🍃 MongoDB (Atlas)

🔐 JWT Authentication

📂 Multer (file uploads)

🧮 csv-parser (CSV data handling)

Deployment:

⚡ Frontend → Vercel

☁️ Backend → Render

🗄️ Database → MongoDB Atlas

✨ Features
Category	Feature	Description
🔐 Authentication	User Signup/Login	Secure JWT-based authentication.
	Persistent Sessions	Users remain logged in until logout.
	Profile Page	View and update user info and profile photo.
	Demo Account	Quick login with demo credentials for recruiters.
💰 Transactions	Add/Edit/Delete Income	Manage all income sources.
	Add/Edit/Delete Expenses	Track and categorize spending.
	CSV Upload	Upload bank or card statements (CSV).
	Auto Categorization	Automatically tags transactions by keywords.
	Duplicate Detection	Prevents importing the same record twice.
	Search & Filter	Filter by category, date, or keyword.
📊 Dashboard & Insights	Overview Cards	Displays Total Income, Expenses, and Balance.
	Charts	Interactive Pie & Bar charts (by category, month).
	Date Range Summary	View financial insights for custom date ranges.
	Expense Limit Alerts	Warns when category spending exceeds 80% limit.
📁 Reports & Data	Export	Download all data as CSV or Excel.
	Summary Reports	Monthly/Yearly transaction summaries.
💅 UI/UX Enhancements	Responsive Design	Fully mobile-friendly interface.
	Toast Notifications	Success & error alerts (React Toastify).
	Dark Mode	Light/Dark theme toggle with persistence.
	Loading Indicators	Skeleton screens during fetch/upload.