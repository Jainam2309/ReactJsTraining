
import React, { useState } from "react";

export default function Data() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (!name || !number || !email) {
      alert("Please fill all fields.");
      return;
    }

    const newContact = { name, number, email };

    if (editIndex !== null) {
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = newContact;
      setContacts(updatedContacts);
      setEditIndex(null);
    } else {
      setContacts([...contacts, newContact]);
    }

    // Clear fields
    setName("");
    setNumber("");
    setEmail("");
  };

  const handleEdit = (index) => {
    const contact = contacts[index];
    setName(contact.name);
    setNumber(contact.number);
    setEmail(contact.email);
    setEditIndex(index);
  };

  const handleDelete = (indexToDelete) => {
    const filtered = contacts.filter((_, index) => index !== indexToDelete);
    setContacts(filtered);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Management</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          style={{ marginRight: "10px" }}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={{ marginRight: "10px" }}
          type="text"
          placeholder="Phone Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          style={{ marginRight: "10px" }}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {contacts.length === 0 ? (
        <p>No contacts added yet.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td>{contact.email}</td>
                <td>
                  <button
                    style={{ marginRight: "10px" }}
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

