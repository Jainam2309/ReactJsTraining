// import { useState } from "react"

// export default function Data() {
//   const[name,setName] = useState("");
//   const[number,setNumber] = useState();
//   const[email,setEmail] = useState();



//   let addFunction = () => {
//     console.log(email);console.log(number);console.log(name);
//   }

//     return(
        
//        <>
       
//         <h1>Form data</h1>
//         <label>Name:</label>
//         <input  style={{marginRight:"15px"}} type="text" placeholder="Name" 
//         onChange={(e)=>setName(e.target.value)}
//         />
        
//         <label>PhoneNo:</label>
//         <input  style={{marginRight:"15px"}} type="number" placeholder="PhoneNo" onChange={(e)=>setNumber(e.target.value)}/>
        
//         <label>Email:</label>
//         <input style={{marginRight:"15px"}}  type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>  
          
//         <button 
//         onClick={addFunction} 
//         style={{marginTop:"15px",marginRight:"15px"}}>Add</button>   
//         <button >Delete</button>
         
//        </>
//     )
// }

import React, { useState } from "react";

export default function ContactTable() {
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
      
      const updated = [...contacts];
      updated[editIndex] = newContact;
      setContacts(updated);
      setEditIndex(null);
    } else {
      
      setContacts([...contacts, newContact]);
    }

    
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
    const updated = contacts.filter((_, index) => index !== indexToDelete);
    setContacts(updated);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact Management</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
         style={{marginRight:"15px"}}
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
         style={{marginRight:"15px"}}
          type="text"
          placeholder="Number"
          value={number}
          required
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
        style={{marginRight:"15px"}}
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="4">No contacts found.</td>
            </tr>
          ) : (
            contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.number}</td>
                <td>{contact.email}</td>
                <td>
                  <button  style={{marginRight:"15px"}} onClick={() => handleEdit(index)}>Edit</button>
                  <button style={{marginRight:"15px"}} onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
