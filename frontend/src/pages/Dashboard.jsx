import React, { useState, useRef, useEffect } from 'react';
import TaskCard from '../components/TaskCard.jsx';
import AddTaskModal from '../components/AddTaskModal.jsx';
import ShareTaskModal from '../components/ShareTaskModal.jsx';
import { FaPlusCircle, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [filter, setFilter] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState({ name: '', email: '' });
  const dropdownRef = useRef(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) return navigate("/");
    setUser(JSON.parse(userData));

    fetchTasks();
  }, [navigate]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) handleLogout();
    }
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFilter = (f) => setFilter(f);

  const filteredTasks = tasks.filter(task => {
    const today = new Date().toISOString().split("T")[0];
    if (filter === "Today") return task.dueDate === today;
    if (filter === "Overdue") return task.dueDate < today && task.status !== "Completed";
    if (filter === "High") return task.priority === "High";
    if (filter === "Completed") return task.status === "Completed";
    if (filter === "In Progress") return task.status === "In Progress";
    return true;
  });

  const handleLogout = () => {
  if (window.confirm("Are you sure you want to logout?")) {
    localStorage.clear();
    navigate("/");
  }
};


  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="container-fluid px-0 m-0">
      <nav className="navbar navbar-light bg-white shadow-sm px-4 py-2 border-bottom d-flex justify-content-between align-items-center">
        <span className="navbar-brand h4 mb-0">📋 Task Dashboard</span>
        <div className="position-relative" ref={dropdownRef}>
          <button className="btn d-flex align-items-center gap-2" type="button" onClick={toggleDropdown}>
            <div className="text-end">
              <div className="fw-semibold" style={{ fontFamily: 'cursive', fontSize: '1rem' }}>{user.name}</div>
              <small className="text-muted" style={{ fontSize: '0.8rem' }}>{user.email}</small>
            </div>
            <FaUserCircle size={40} className="text-primary" />
          </button>
          {dropdownOpen && (
            <div className="position-absolute end-0 mt-2 rounded shadow border bg-white overflow-hidden" style={{ minWidth: '240px', zIndex: 1050 }}>
              <div className="px-3 py-3 border-bottom">
                <div className="fw-semibold">{user.name}</div>
                <div className="text-muted small">{user.email}</div>
              </div>
              <ul className="list-unstyled m-0">
                <li>
                  <button className="dropdown-item px-3 py-2 text-dark w-100 text-start" onClick={handleLogout}>
                    <FaPlusCircle className="me-2" /> Add another account
                  </button>
                </li>
                <li><hr className="m-0" /></li>
                <li>
                  <button className="dropdown-item py-2 px-3 text-danger w-100 text-start" onClick={handleLogout}>
                    <FaSignOutAlt className="me-2" /> Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Your Tasks</h2>
          <button className="btn btn-primary d-flex align-items-center gap-2" onClick={() => setShowAddModal(true)}>
            <FaPlusCircle /> Add Task
          </button>
        </div>

        <div className="btn-group mb-4">
          {["All", "Today", "Overdue", "High", "Completed", "In Progress"].map(f => (
            <button key={f} onClick={() => handleFilter(f)} className={`btn btn-outline-dark ${filter === f ? 'active' : ''}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="row g-3">
          {filteredTasks.length ? (
            filteredTasks.map((task, i) => {
              // Check if this task is shared with the current user
              const userData = JSON.parse(localStorage.getItem("user") || "{}");
              const isShared = task.owner && task.owner._id !== userData._id && task.sharedWith && task.sharedWith.includes(userData.email);
              
              return (
                <div className="col-md-6" key={i}>
                  <TaskCard
                    task={task}
                    isShared={isShared}
                    onEdit={() => {
                      setSelectedTask(task);
                      setShowAddModal(true);
                    }}
                    onShare={() => {
                      setSelectedTask(task);
                      setShowShareModal(true);
                    }}
                  />
                </div>
              );
            })
          ) : (
            <p>No tasks available.</p>
          )}
        </div>
      </div>

      <AddTaskModal
        show={showAddModal}
        onHide={() => {
          setShowAddModal(false);
          setSelectedTask(null);
        }}
        task={selectedTask}
        setTasks={setTasks}
        tasks={tasks}
        refreshTasks={fetchTasks}
      />

      <ShareTaskModal
        show={showShareModal}
        onHide={() => setShowShareModal(false)}
        task={selectedTask}
        refreshTasks={fetchTasks}
      />

    </div>
  );
};

export default Dashboard;
