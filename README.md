# 📚 Book Management App

A simple full-stack CRUD (Create, Read, Update, Delete) web application built with **React.js** for the frontend and **Express.js** with **MongoDB** for the backend.

---

## 🔧 Features

- ✅ Add a new book with title, author, and published year  
- ✅ View a list of all books  
- ✅ View single book details in a modal  
- ✅ Edit existing book details  
- ✅ Delete a book  
- ✅ Loading spinner during operations  
- ✅ Notification system using `notistack`  
- ✅ Responsive card layout with icons from `react-icons`

---

## 🛠️ Technologies Used

### Frontend
- React.js  
- React Router DOM  
- Axios  
- Tailwind CSS  
- React Icons  
- Notistack (for notifications)

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- CORS  
- dotenv

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Felicien407/BooksManager.git
cd BooksManager
```

---

## 📂 Folder Structure

### 1. Frontend

```
client/
│
├── src/
│   ├── components/
│   │   ├── BookSingleCard.jsx
│   │   ├── Bookmodal.jsx
│   │   ├── Spinner.jsx
│   │   └── BackButton.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── CreateBook.jsx
│   │   ├── EditBook.jsx
│   │   └── BookDetails.jsx
│   │
│   ├── App.js
│   └── index.js
```

### 2. Backend

```
backend/
│
├── models/
│   └── bookModel.js
│
├── routes/
│   └── bookRoutes.js
│
├── controllers/
│   └── bookController.js
│
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Setup Instructions

### Frontend

```bash
cd client
npm install
npm run dev
```

> Runs on: [http://localhost:5173](http://localhost:5173)

### Backend

```bash
cd backend
npm install
npm run dev
```

> Runs on: [http://localhost:8012](http://localhost:8012)

---

## 🌐 API Endpoints

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| GET    | `/books`             | Get all books           |
| GET    | `/books/:id`         | Get book by ID          |
| POST   | `/books/create`      | Add a new book          |
| PUT    | `/books/edit/:id`    | Edit existing book      |
| DELETE | `/books/delete/:id`  | Delete a book           |

---

## ✅ Deployment (Optional)

You can deploy this app on platforms like:
- **Frontend:** Vercel, Netlify
- **Backend:** Render, Railway, Heroku
- **Database:** MongoDB Atlas

---

## 👨‍💻 Author

**Felicien Niyomwungeri**  
GitHub: [@Felicien407](https://github.com/Felicien407)

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).