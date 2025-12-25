# Marokko Hotel Booking

This is a full-stack MERN (MongoDB, Express, React, Node.js) hotel booking application. It features a client-facing frontend for users to browse and book rooms, and a separate admin panel for managing rooms, reservations, and messages.

## Features

### User Frontend
-   **Browse Rooms:** View a list of available hotel rooms.
-   **View Room Details:** See detailed information for each room.
-   **User Authentication:** Users can register and log in to their accounts.
-   **Book a Room:** Logged-in users can book a room for specific dates.
-   **View Bookings:** Logged-in users can view their past and upcoming bookings.
-   **Contact Form:** Users can send messages to the hotel administration.

### Admin Panel
-   **Secure Login:** Admin has a separate, secure login.
-   **Room Management:**
    -   Add new rooms with images, descriptions, and prices.
    -   Update existing room details.
    -   Remove rooms from the listing.
-   **Reservation Management:**
    -   View all user reservations.
    -   Remove reservations.
-   **Message Viewing:**
    -   View all messages sent through the contact form.

## Tech Stack

-   **Frontend:**
    -   React
    -   React Router
    -   Tailwind CSS
    -   Axios
    -   React Toastify
-   **Backend:**
    -   Node.js
    -   Express.js
    -   MongoDB (with Mongoose)
    -   JSON Web Tokens (JWT) for authentication
    -   Cloudinary for image storage
    -   Multer for file uploads
-   **Admin Panel:**
    -   React
    -   React Router
    -   Tailwind CSS
    -   Axios
    -   React Toastify

## Getting Started

### Prerequisites
-   Node.js
-   npm
-   MongoDB Atlas account (or local MongoDB instance)
-   Cloudinary account

### Backend Setup
1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `backend` directory and add the following variables:
    ```
    MONGODB_URI=<your_mongodb_uri>
    CLOUDINARY_NAME=<your_cloudinary_name>
    CLOUDINARY_API_KEY=<your_cloudinary_api_key>
    CLOUDINARY_SECRET_KEY=<your_cloudinary_secret_key>
    JWT_SECRET=<your_jwt_secret>
    ADMIN_EMAIL=<your_admin_email>
    ADMIN_PASSWORD=<your_admin_password>
    ```
4.  Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `frontend` directory and add the following variable:
    ```
    VITE_BACKEND_URL=http://localhost:4000
    ```
4.  Start the frontend development server:
    ```bash
    npm run dev
    ```

### Admin Panel Setup
1.  Navigate to the `admin` directory:
    ```bash
    cd admin
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `admin` directory and add the following variable:
    ```
    VITE_BACKEND_URL=http://localhost:4000
    ```
4.  Start the admin panel development server:
    ```bash
    npm run dev
    ```

## API Endpoints

### Rooms (`/api/room`)
-   `POST /add`: Add a new room (admin only).
-   `GET /list`: Get a list of all rooms.
-   `GET /:id`: Get details for a single room.
-   `POST /remove`: Remove a room (admin only).
-   `POST /update`: Update a room (admin only).

### Users (`/api/user`)
-   `POST /register`: Register a new user.
-   `POST /login`: Log in a user.
-   `GET /list`: Get a list of all users (admin only).
-   `POST /remove`: Remove a user (admin only).

### Reservations (`/api/reservation`)
-   `POST /create`: Create a new reservation (user only).
-   `POST /list`: Get a list of reservations for the logged-in user (user only).
-   `GET /list-all`: Get a list of all reservations (admin only).
-   `POST /remove`: Remove a reservation (admin only).

### Admin (`/api/admin`)
-   `POST /login`: Log in the admin.

### Messages (`/api/message`)
-   `POST /create`: Create a new message from the contact form.
-   `GET /list`: Get a list of all messages (admin only).
