import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import API from '../api';

const AddTaskModal = ({ show, onHide, task, setTasks, tasks, refreshTasks }) => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    priority: 'Low',
    status: 'In Progress',
    dueDate: ''
  });

  useEffect(() => {
    if (task) setForm(task);
    else setForm({
      title: '',
      description: '',
      priority: 'Low',
      status: 'In Progress',
      dueDate: ''
    });
  }, [task]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      };

      if (task) {
        // Update existing task
        await API.put(`/tasks/${task._id}`, form, config);
      } else {
        // Add new task
        await API.post('/tasks', form, config);
      }

      onHide();
      refreshTasks(); // Fetch updated task list from backend
    } catch (err) {
      console.error("Task submission error:", err);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{task ? 'Edit Task' : 'Add Task'}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select name="priority" value={form.priority} onChange={handleChange}>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select name="status" value={form.status} onChange={handleChange}>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Cancel</Button>
          <Button variant="primary" type="submit">Save Task</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
