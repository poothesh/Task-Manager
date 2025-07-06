import React from 'react';
import { FaShare, FaUsers } from 'react-icons/fa';

const TaskCard = ({ task, onEdit, onShare, isShared = false }) => {
  const getPriorityColor = (p) => {
    if (p === 'High') return 'danger';
    if (p === 'Medium') return 'warning';
    return 'secondary';
  };

  return (
    <div className={`card p-3 task-card ${task.status === 'Completed' ? 'completed' : 'in-progress'}`}>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5 className="mb-1">{task.title}</h5>
          {isShared && task.owner && (
            <small className="text-info">
              <FaUsers className="me-1" />
              Shared by {task.owner.name}
            </small>
          )}
        </div>
        <span className={`badge bg-${getPriorityColor(task.priority)}`}>{task.priority}</span>
      </div>
      <p className="text-muted mb-1">Due: {task.dueDate}</p>
      <p>{task.description}</p>
      
      {task.sharedWith && task.sharedWith.length > 0 && !isShared && (
        <div className="mb-2">
          <small className="text-muted">
            <FaShare className="me-1" />
            Shared with: {task.sharedWith.length} {task.sharedWith.length === 1 ? 'person' : 'people'}
          </small>
        </div>
      )}
      
      <div className="d-flex justify-content-between align-items-center">
        <select
          className="form-select form-select-sm w-auto"
          value={task.status}
          onChange={(e) => onEdit({ ...task, status: e.target.value })}
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <div>
          <button className="btn btn-sm btn-outline-primary me-2" onClick={onEdit}>Edit</button>
          {!isShared && (
            <button className="btn btn-sm btn-outline-secondary" onClick={onShare}>
              <FaShare className="me-1" />
              Share
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;