import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { getContacts, updateContact } from "../services/contactService";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  
  const fetchContact = useCallback(async () => {
    const contacts = await getContacts();
    const contactToEdit = contacts.find((c) => c._id === id);
    if (contactToEdit) {
      setContact(contactToEdit);
    }
  }, [id]);

  useEffect(() => {
    fetchContact();
  }, [fetchContact]);

  const handleUpdateContact = async (updatedContact) => {
    try {
      await updateContact(id, updatedContact);
      navigate("/"); 
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {contact && <ContactForm onSubmit={handleUpdateContact} initialValues={contact} />}
    </div>
  );
};

export default EditContact;
