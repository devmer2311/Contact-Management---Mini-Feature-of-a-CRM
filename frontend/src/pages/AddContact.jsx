import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { createContact } from "../services/contactService";
import { Modal, Button } from "react-bootstrap"; 

const AddContact = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const handleAddContact = async (contact) => {
    try {
      await createContact(contact);
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage("Duplicate data found. Please enter unique contact details.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      setShowErrorDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setShowErrorDialog(false);
    setErrorMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Contact</h2>
      <ContactForm onSubmit={handleAddContact} />

      
      <Modal show={showErrorDialog} onHide={handleCloseDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDialog}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddContact;
