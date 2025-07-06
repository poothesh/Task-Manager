# 🔧 Backend API - Task Manager

A robust Node.js/Express.js backend API for the Task Manager application, providing secure authentication, task management, and real-time collaboration features.

## 🚀 Features

### Authentication & Security
- ✅ **JWT Authentication**: Secure token-based authentication
- ✅ **Google OAuth**: Third-party authentication integration
- ✅ **Password Hashing**: bcrypt for secure password storage
- ✅ **CORS Configuration**: Cross-origin resource sharing
- ✅ **Cookie Management**: HTTP-only cookies for security
- ✅ **Input Validation**: Comprehensive request validation

### Task Management
- ✅ **CRUD Operations**: Full task lifecycle management
- ✅ **Task Sharing**: Share tasks with other users
- ✅ **Priority Levels**: High, Medium, Low classification
- ✅ **Status Tracking**: In Progress and Completed states
- ✅ **Due Date Management**: Flexible deadline handling
- ✅ **Owner Attribution**: Track task ownership

### Database & Performance
- ✅ **MongoDB Integration**: NoSQL database with Mongoose ODM
- ✅ **Data Validation**: Schema-level validation
- ✅ **Error Handling**: Comprehensive error management
- ✅ **Logging**: Request and error logging
- ✅ **Connection Pooling**: Optimized database connections

## 🛠️ Tech Stack

- **Node.js** (v18+) - JavaScript runtime
- **Express.js** (v4.18+) - Web application framework
- **MongoDB** (v6+) - NoSQL database
- **Mongoose** (v7+) - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **cors** - Cross-origin resource sharing
- **cookie-parser** - Cookie handling
- **dotenv** - Environment variable management
- **Google OAuth** - Third-party authentication

## 📁 Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection configuration
├── controllers/
│   ├── authController.js   # Authentication logic
│   └── taskController.js   # Task management logic
├── middleware/
│   └── auth.js            # JWT authentication middleware
├── models/
│   ├── Task.js            # Task data model
│   └── User.js            # User data model
├── routes/
│   ├── auth.js            # Authentication routes
│   └── tasks.js           # Task management routes
├── server.js              # Main application entry point
├── package.json           # Dependencies and scripts
└── .env                   # Environment variables (not in repo)
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Google OAuth credentials (optional)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   
   Create `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   JWT_SECRET=your-super-secret-jwt-key-here
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

3. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   
   # Direct start
   node server.js
   ```

4. **Verify the server**
   - Server runs on: http://localhost:5000
   - Health check: http://localhost:5000/api/health

## 📖 API Documentation

### Authentication Endpoints

#### `POST /api/auth/signup`
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### `POST /api/auth/login`
Authenticate existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

#### `POST /api/auth/google`
Authenticate with Google OAuth.

**Request Body:**
```json
{
  "token": "google_id_token"
}
```

#### `POST /api/auth/logout`
Logout current user.

### Task Management Endpoints

#### `GET /api/tasks`
Get all tasks for the authenticated user.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

#### `POST /api/tasks`
Create a new task.

**Request Body:**
```json
{
  "title": "Complete project",
  "description": "Finish the task manager application",
  "dueDate": "2024-01-15",
  "priority": "High",
  "status": "In Progress"
}
```

#### `PUT /api/tasks/:id`
Update an existing task.

#### `DELETE /api/tasks/:id`
Delete a task.

#### `POST /api/tasks/:id/share`
Share a task with another user.

**Request Body:**
```json
{
  "email": "colleague@example.com"
}
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port | 5000 | No |
| `MONGODB_URI` | MongoDB connection string | - | Yes |
| `JWT_SECRET` | JWT signing secret | - | Yes |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | - | No |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret | - | No |

### Database Configuration

The application uses MongoDB with the following collections:
- **users**: User account information
- **tasks**: Task data with owner and sharing information

### Security Configuration

- **JWT Expiration**: 24 hours
- **Password Hashing**: bcrypt with salt rounds of 10
- **CORS**: Configured for frontend domain
- **Cookies**: HTTP-only, secure in production

## 🧪 Testing

### Manual API Testing

Use tools like Postman or curl to test endpoints:

```bash
# Test authentication
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"password123"}'

# Test task creation (requires authentication)
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt_token>" \
  -d '{"title":"Test Task","description":"Test description","dueDate":"2024-01-15","priority":"Medium"}'
```

### Testing Checklist
- [ ] User registration and login
- [ ] Google OAuth authentication
- [ ] JWT token validation
- [ ] Task CRUD operations
- [ ] Task sharing functionality
- [ ] Error handling and validation
- [ ] Database operations
- [ ] CORS configuration

## 🚀 Deployment

### Production Deployment

1. **Environment Setup**
   ```bash
   # Set production environment variables
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todo-app
   JWT_SECRET=your-production-jwt-secret
   ```

2. **Database Setup**
   - Use MongoDB Atlas for cloud database
   - Configure network access and security
   - Set up database indexes for performance

3. **Deployment Platforms**
   - **Heroku**: Easy deployment with Git integration
   - **Railway**: Modern deployment platform
   - **Render**: Free tier available
   - **DigitalOcean**: Full control over server

### Performance Optimization

- **Database Indexing**: Index on frequently queried fields
- **Connection Pooling**: Optimize MongoDB connections
- **Caching**: Implement Redis for session caching
- **Compression**: Enable gzip compression
- **Rate Limiting**: Protect against API abuse

## 🔍 Monitoring & Logging

### Error Handling
- Comprehensive try-catch blocks
- Detailed error messages for debugging
- Proper HTTP status codes
- Error logging for production

### Logging Strategy
- Request/response logging
- Error logging with stack traces
- Performance monitoring
- Security event logging

## 📝 Assumptions Made

### Technical Assumptions
- **Database Choice**: MongoDB is preferred for its flexibility with document-based task data
- **Authentication Method**: JWT tokens are used for stateless authentication
- **API Design**: RESTful API principles are followed for consistency
- **Error Handling**: Comprehensive error handling is implemented at all levels
- **Security**: HTTPS will be used in production for secure data transmission

### Performance Assumptions
- **Database Indexing**: MongoDB indexes are optimized for common queries (user tasks, shared tasks)
- **Connection Pooling**: MongoDB connection pooling is sufficient for moderate traffic
- **Caching Strategy**: Browser caching is adequate for static assets
- **Rate Limiting**: Basic rate limiting is sufficient for initial deployment

### Security Assumptions
- **Input Validation**: Both client and server-side validation are necessary
- **Password Security**: bcrypt hashing with salt rounds of 10 is secure
- **Token Storage**: JWT tokens stored in HTTP-only cookies are secure
- **CORS Policy**: CORS is configured for the frontend domain only

### Scalability Assumptions
- **Horizontal Scaling**: Application can be scaled horizontally with load balancers
- **Database Scaling**: MongoDB Atlas provides adequate scaling capabilities
- **Stateless Design**: JWT-based authentication allows for stateless scaling
- **Microservices**: Current monolithic structure is sufficient for initial deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Express.js team for the web framework
- MongoDB team for the database
- JWT.io for the authentication standard
- Google for OAuth integration
- All open-source contributors

---

**This project is a part of a hackathon run by [https://www.katomaran.com](https://www.katomaran.com)** 