# Contact Management - Mini Feature of a CRM

🗒️ OVERVIEW

The Contact Management feature helps users of the system to keep track of important contact information of customers/clients. It allows users to add, view, update, and delete contact details all in one place. This makes it easy for users to find and manage information, which is especially helpful in business settings where tracking relationships is key.



## 🚀 PROJECT SETUP INSTRUCTIONS

Step-by-Step Setup:

1. Clone the repository:

Open a terminal and run:
```
git clone <repository-link>
cd <repository-name>
```

2. Backend Setup:

Go to the backend directory:
```
cd backend
```
Install dependencies:
```
npm install
```
Create a .env file in the backend directory and configure it with the necessary database settings (e.g., MONGO_URI).

Run the backend:
```
npm run dev
```
3. Frontend Setup:

Go to the frontend directory:
```
cd frontend
```
Install dependencies:
```
npm install
```
Run the frontend:
```
npm start
```

4. Testing the Application:

Visit `http://localhost:3000 ` for the frontend and interact with the application.
Ensure all CRUD operations (Add, View, Edit, Delete) are functional.

## Challenges and Solutions
- Handling Duplicates: 
We implemented a check in the backend API to handle duplicate contacts by checking if the email already exists before adding a new contact.

- Pagination and Sorting: 
MUI Table component was used to add pagination and sorting to the contact table, enhancing the user experience for managing large contact lists.

