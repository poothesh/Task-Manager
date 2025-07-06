# 📋 Task Manager Web Application

A modern, full-stack task management application built with React, Node.js, and MongoDB. This application allows users to create, manage, and share tasks with real-time collaboration features.

## 🚀 Features

### Core Features
- ✅ **User Authentication**: Secure login/signup with JWT tokens
- ✅ **Google OAuth**: One-click login with Google accounts
- ✅ **Task Management**: Create, edit, delete, and organize tasks
- ✅ **Task Sharing**: Share tasks with other users via email
- ✅ **Priority Levels**: High, Medium, Low priority classification
- ✅ **Status Tracking**: In Progress and Completed status options
- ✅ **Due Date Management**: Set and track task deadlines
- ✅ **Responsive Design**: Works seamlessly on desktop and mobile

### Advanced Features
- ✅ **Real-time Updates**: Instant task synchronization
- ✅ **User-friendly Interface**: Clean, modern Bootstrap UI
- ✅ **Task Filtering**: Filter by status, priority, and date
- ✅ **Shared Task Display**: Shows sharer's name for shared tasks
- ✅ **Secure API**: Protected routes with authentication middleware

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Bootstrap 5** - Responsive CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Icons** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Google OAuth** - Third-party authentication
- **CORS** - Cross-origin resource sharing
- **Cookie Parser** - Cookie handling

## 📁 Project Structure

```
todo-webpage/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── api/            # API configuration
│   │   └── index.css       # Global styles
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Node.js backend application
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── server.js          # Main server file
│   └── package.json
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Google OAuth credentials (optional)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-webpage
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   JWT_SECRET=your-super-secret-jwt-key
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

4. **Start the application**
   ```bash
   # Start backend server (from backend directory)
   npm start
   # or
   node server.js

   # Start frontend development server (from frontend directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📖 API Documentation

### Authentication Endpoints
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/google` - Google OAuth login
- `POST /api/auth/logout` - User logout

### Task Endpoints
- `GET /api/tasks` - Get user's tasks
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `POST /api/tasks/:id/share` - Share task with user

## 🔧 Configuration

### Backend Configuration
- **Port**: 5000 (configurable via PORT env variable)
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens stored in HTTP-only cookies
- **CORS**: Configured for frontend domain

### Frontend Configuration
- **Development Server**: Vite dev server on port 5173
- **API Base URL**: http://localhost:5000/api
- **Build Output**: Optimized for production deployment

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Google OAuth authentication
- [ ] Task creation and editing
- [ ] Task sharing functionality
- [ ] Responsive design on different screen sizes
- [ ] Error handling and validation

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB database (MongoDB Atlas recommended)
2. Configure environment variables
3. Deploy to platforms like:
   - Heroku
   - Railway
   - Render
   - DigitalOcean

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to platforms like:
   - Vercel
   - Netlify
   - GitHub Pages
   - Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Assumptions Made

This project was developed with the following assumptions:

### Technical Assumptions
- **Database**: MongoDB is used as the primary database for its flexibility with document-based data
- **Authentication**: JWT tokens are preferred over sessions for stateless authentication
- **Frontend Framework**: React was chosen for its component-based architecture and large ecosystem
- **Styling**: Bootstrap 5 provides a solid foundation for responsive design
- **API Design**: RESTful API design principles are followed for consistency

### User Experience Assumptions
- **Task Sharing**: Users prefer to share tasks via email addresses rather than usernames
- **Real-time Updates**: Immediate feedback is preferred over page refreshes
- **Mobile-First**: The application should work well on mobile devices
- **Intuitive Interface**: Users expect familiar patterns like drag-and-drop and inline editing

### Security Assumptions
- **HTTPS**: Production deployment will use HTTPS for secure data transmission
- **Input Validation**: Both client and server-side validation are necessary
- **Rate Limiting**: API endpoints should be protected against abuse
- **Data Privacy**: User data should be handled according to privacy regulations

### Performance Assumptions
- **Caching**: Browser caching is sufficient for static assets
- **Database Indexing**: MongoDB indexes are optimized for common queries
- **Bundle Size**: Vite's build optimization provides adequate performance
- **CDN**: Static assets can be served from a CDN in production

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Bootstrap team for the responsive CSS framework
- MongoDB team for the flexible database
- Express.js team for the web framework
- All open-source contributors

---

**This project is a part of a hackathon run by [https://www.katomaran.com](https://www.katomaran.com)** 