import React, { useState } from "react";
import { TextField, Button, Card, CardContent, Typography, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

const ContactForm = ({ onSubmit, initialValues = {}, existingContacts = [] }) => {
  const [formData, setFormData] = useState({
    firstName: initialValues.firstName || "",
    lastName: initialValues.lastName || "",
    email: initialValues.email || "",
    phoneNumber: initialValues.phoneNumber || "",
    company: initialValues.company || "",
    jobTitle: initialValues.jobTitle || "",
  });

  const [openDialog, setOpenDialog] = useState(false);  
  const [dialogMessage, setDialogMessage] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const duplicateEmail = existingContacts.some(contact => contact.email === formData.email);
    const duplicatePhone = existingContacts.some(contact => contact.phoneNumber === formData.phoneNumber);

    if (duplicateEmail) {
      setDialogMessage("A contact with this email already exists.");
      setOpenDialog(true);
      return;
    }

    if (duplicatePhone) {
      setDialogMessage("A contact with this phone number already exists.");
      setOpenDialog(true);
      return;
    }

  
    onSubmit(formData);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); 
  };

  return (
    <>
      <Card style={{ maxWidth: 500, margin: "20px auto" }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            {initialValues.firstName ? "Edit Contact" : "Add New Contact"}
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              name="firstName"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              style={{ marginBottom: 10 }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              style={{ marginBottom: 10 }}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              style={{ marginBottom: 10 }}
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              fullWidth
              value={formData.phoneNumber}
              onChange={handleChange}
              style={{ marginBottom: 10 }}
            />
            <TextField
              label="Company"
              name="company"
              fullWidth
              value={formData.company}
              onChange={handleChange}
              style={{ marginBottom: 10 }}
            />
            <TextField
              label="Job Title"
              name="jobTitle"
              fullWidth
              value={formData.jobTitle}
              onChange={handleChange}
              style={{ marginBottom: 20 }}
            />
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>

      
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{dialogMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ContactForm;
