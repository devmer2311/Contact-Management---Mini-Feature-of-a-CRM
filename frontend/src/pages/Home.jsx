import React, { useEffect, useState } from "react";
import ContactsTable from "../components/ContactsTable";
import { getContacts, deleteContact, updateContact } from "../services/contactService";
import EditContactModal from "../components/EditContactModal";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  const handleDelete = async () => {
    if (contactToDelete) {
      await deleteContact(contactToDelete);
      setShowDeleteModal(false); 
      fetchContacts(); 
    }
  };

  const handleEdit = (contact) => {
    setCurrentContact(contact); 
    setShowEditModal(true); 
  };

  const handleUpdateContact = async (updatedContact) => {
    await updateContact(updatedContact._id, updatedContact);
    setShowEditModal(false);
    fetchContacts(); 
  };

  return (
    <div style={{ padding: "20px" }}>
      <ContactsTable
        contacts={contacts}
        onDelete={(id) => {
          setContactToDelete(id); 
          setShowDeleteModal(true); 
        }}
        onEdit={handleEdit} 
      />

      
      {showEditModal && (
        <EditContactModal
          contact={currentContact}
          onSubmit={handleUpdateContact}
          onClose={() => setShowEditModal(false)}
        />
      )}

      
      {showDeleteModal && (
        <DeleteConfirmationModal
          onDelete={handleDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default Home;
