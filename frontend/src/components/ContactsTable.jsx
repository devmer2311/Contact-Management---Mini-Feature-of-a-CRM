import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';  

import './ContactsTable.css'; 

const ContactsTable = ({ contacts, onDelete, onEdit }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.company}</td>
              <td>{contact.jobTitle}</td>
              <td className="actions">
                <button onClick={() => onEdit(contact)}>
                  <i><FaEdit /></i> Edit
                </button>
                <button onClick={() => onDelete(contact._id)}>
                  <i><FaTrashAlt /></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsTable;
