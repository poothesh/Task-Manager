# 🎨 Frontend - Task Manager

A modern, responsive React application for the Task Manager, built with Vite and Bootstrap 5. This frontend provides an intuitive user interface for task management, user authentication, and real-time collaboration.

## 🚀 Features

### User Interface
- ✅ **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- ✅ **Modern UI**: Clean, intuitive interface with Bootstrap 5
- ✅ **Real-time Updates**: Instant feedback for all user actions
- ✅ **Loading States**: Smooth loading indicators and transitions
- ✅ **Error Handling**: User-friendly error messages and validation
- ✅ **Accessibility**: WCAG compliant design patterns

### Authentication
- ✅ **Login/Signup**: Traditional email/password authentication
- ✅ **Google OAuth**: One-click login with Google accounts
- ✅ **Session Management**: Automatic token handling and refresh
- ✅ **Protected Routes**: Secure access to authenticated content
- ✅ **Logout Functionality**: Secure session termination

### Task Management
- ✅ **Task Creation**: Intuitive task creation with all required fields
- ✅ **Task Editing**: Inline editing and modal-based updates
- ✅ **Task Deletion**: Confirmation dialogs for safe deletion
- ✅ **Task Filtering**: Filter by status, priority, and date
- ✅ **Task Sharing**: Share tasks with other users via email
- ✅ **Priority Levels**: Visual priority indicators (High, Medium, Low)
- ✅ **Status Tracking**: Easy status updates (In Progress, Completed)

### User Experience
- ✅ **Dashboard**: Comprehensive task overview with statistics
- ✅ **Task Cards**: Visual task representation with all details
- ✅ **Modal Dialogs**: Clean modal interfaces for complex actions
- ✅ **Form Validation**: Real-time input validation and feedback
- ✅ **Responsive Navigation**: Mobile-friendly navigation menu
- ✅ **User Profile**: User information display and management

## 🛠️ Tech Stack

- **React 18** - Modern UI framework with hooks
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing and navigation
- **Bootstrap 5** - Responsive CSS framework
- **Axios** - HTTP client for API communication
- **React Icons** - Beautiful icon library
- **React Bootstrap** - Bootstrap components for React
- **Local Storage** - Client-side data persistence

## 📁 Project Structure

```
frontend/
├── public/
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # Application icon
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── AddTaskModal.jsx    # Task creation/editing modal
│   │   ├── ShareTaskModal.jsx  # Task sharing modal
│   │   └── TaskCard.jsx        # Individual task display
│   ├── pages/             # Page components
│   │   ├── Dashboard.jsx       # Main dashboard page
│   │   ├── Login.jsx           # Login page
│   │   └── Signup.jsx          # Registration page
│   ├── api/               # API configuration
│   │   └── index.js           # Axios configuration
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Backend API running (see backend README)

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure API endpoint**
   
   Update the API base URL in `src/api/index.js` if needed:
   ```javascript
   const API_BASE_URL = 'http://localhost:5000/api';
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Development: http://localhost:5173
   - Production build: `npm run build`

## 🎨 Component Architecture

### Core Components

#### `App.jsx`
Main application component with routing and authentication state management.

#### `Dashboard.jsx`
Primary dashboard with task management, filtering, and user interface.

#### `TaskCard.jsx`
Individual task display component with edit, share, and status controls.

#### `AddTaskModal.jsx`
Modal for creating and editing tasks with form validation.

#### `ShareTaskModal.jsx`
Modal for sharing tasks with other users via email.

### Page Components

#### `Login.jsx`
Authentication page with traditional login and Google OAuth.

#### `Signup.jsx`
User registration page with form validation.

## 🔧 Configuration

### Development Configuration
- **Development Server**: Vite dev server on port 5173
- **Hot Reload**: Automatic browser refresh on code changes
- **Source Maps**: Enabled for debugging
- **ESLint**: Code quality and consistency

### Production Configuration
- **Build Optimization**: Minified and optimized output
- **Asset Optimization**: Compressed images and fonts
- **Bundle Splitting**: Code splitting for better performance
- **Service Worker**: Optional PWA capabilities

### API Configuration
- **Base URL**: Configurable API endpoint
- **Timeout**: 10-second request timeout
- **Retry Logic**: Automatic retry on network failures
- **Error Handling**: Centralized error management

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration and login
- [ ] Google OAuth authentication
- [ ] Task creation and editing
- [ ] Task sharing functionality
- [ ] Task filtering and search
- [ ] Responsive design on different screen sizes
- [ ] Form validation and error handling
- [ ] Navigation and routing
- [ ] Session management and logout

### Browser Compatibility
- ✅ **Chrome** (v90+)
- ✅ **Firefox** (v88+)
- ✅ **Safari** (v14+)
- ✅ **Edge** (v90+)
- ✅ **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Build for Production
```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

### Deployment Platforms

#### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

#### Netlify
1. Drag and drop the `dist` folder
2. Or connect to Git repository
3. Configure build settings similar to Vercel

#### GitHub Pages
1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy script: `"deploy": "gh-pages -d dist"`
4. Run: `npm run deploy`

#### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize: `firebase init hosting`
3. Build and deploy: `npm run build && firebase deploy`

## 🎯 Performance Optimization

### Build Optimization
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Minification**: CSS and JavaScript minification
- **Asset Optimization**: Image and font optimization

### Runtime Optimization
- **Lazy Loading**: Component lazy loading for better performance
- **Memoization**: React.memo for expensive components
- **Debouncing**: Input debouncing for search and filters
- **Caching**: Browser caching for static assets

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist
```

## 🔍 Development Tools

### Code Quality
- **ESLint**: JavaScript code linting
- **Prettier**: Code formatting
- **TypeScript**: Optional type checking (can be added)

### Development Experience
- **Hot Reload**: Instant code changes reflection
- **Error Overlay**: In-browser error display
- **Source Maps**: Debug-friendly development
- **Dev Tools**: React Developer Tools integration

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
- Responsive grid system
- Touch-friendly interface
- Optimized navigation
- Mobile-specific interactions

## 📝 Assumptions Made

### Technical Assumptions
- **Framework Choice**: React is preferred for its component-based architecture and large ecosystem
- **Build Tool**: Vite provides faster development experience compared to Create React App
- **Styling**: Bootstrap 5 offers comprehensive responsive design out of the box
- **State Management**: Local state with React hooks is sufficient for current scope
- **Routing**: React Router provides adequate client-side routing capabilities

### User Experience Assumptions
- **Task Management**: Users prefer card-based task visualization over list views
- **Modal Interfaces**: Modal dialogs are preferred for complex actions like editing and sharing
- **Real-time Feedback**: Immediate visual feedback is preferred over page refreshes
- **Mobile Usage**: The application should work seamlessly on mobile devices
- **Intuitive Navigation**: Users expect familiar navigation patterns

### Performance Assumptions
- **Bundle Size**: Vite's build optimization provides adequate performance
- **Caching Strategy**: Browser caching is sufficient for static assets
- **API Calls**: Axios with proper error handling provides reliable API communication
- **Loading States**: Skeleton loaders and spinners provide good user experience

### Accessibility Assumptions
- **WCAG Compliance**: Bootstrap 5 provides good accessibility foundation
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Readers**: Semantic HTML and ARIA labels are sufficient
- **Color Contrast**: Bootstrap's default color scheme meets accessibility standards

### Browser Support Assumptions
- **Modern Browsers**: Support for browsers with ES6+ support is sufficient
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Fallbacks**: Graceful degradation for unsupported features
- **Mobile Browsers**: iOS Safari and Chrome Mobile are primary mobile targets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Bootstrap team for the responsive CSS framework
- React Router team for the routing solution
- All open-source contributors

---

**This project is a part of a hackathon run by [https://www.katomaran.com](https://www.katomaran.com)**
