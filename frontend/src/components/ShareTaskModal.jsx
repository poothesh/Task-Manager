import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import API from '../api';

const ShareTaskModal = ({ show, onHide, task, refreshTasks }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleShare = async () => {
    if (!email.trim()) {
      setMessage({ type: 'danger', text: 'Please enter an email address' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await API.post(`/tasks/${task._id}/share`, { email });
      setMessage({ type: 'success', text: 'Task shared successfully!' });
      setEmail('');
      if (refreshTasks) refreshTasks();
      setTimeout(() => {
        onHide();
        setMessage({ type: '', text: '' });
      }, 1500);
    } catch (err) {
      console.error('Share task error:', err);
      setMessage({ 
        type: 'danger', 
        text: err.response?.data?.msg || 'Failed to share task' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Share Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message.text && (
          <Alert variant={message.type} className="mb-3">
            {message.text}
          </Alert>
        )}
        <Form.Group className="mb-3">
          <Form.Label>Share with user (email):</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter user's email to share"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          <Form.Text className="text-muted">
            The user must have an account in this task manager.
          </Form.Text>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} disabled={loading}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleShare} disabled={loading}>
          {loading ? 'Sharing...' : 'Share'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShareTaskModal;
