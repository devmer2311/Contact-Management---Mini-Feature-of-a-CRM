import React from "react";
import './DeleteConfirmationModal.css'; 

const DeleteConfirmationModal = ({ onDelete, onCancel }) => {
  return (
    <div className="confirmation-overlay">
      <div className="confirmation-container">
        <h2>Are you sure you want to delete this contact?</h2>
        <div className="confirmation-buttons">
          <button onClick={onDelete}>Yes, Delete</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
