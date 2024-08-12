import { useState } from "react";
import "./Contact.css";
import { dummy } from "../../data/dummy";

const Contact = () => {
  //   const [isContactForm, setIsContactForm] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [data, setData] = useState(dummy);

  function deleteContact(id: number) {
    const updatedData = data.filter((contact) => contact.id !== id);
    setData(updatedData);
  }

  return (
    <div className="contact">
      <div className="contact-actions">
        <button
          className="contact-btn"
          name="create-contact"
          onClick={() => setShowCreateModal(true)}
        >
          create contact
        </button>
      </div>

      {data && data.length > 0 ? (
        data.map((contact): any => {
          return (
            <div
              key={contact.id}
              style={{
                margin: "1rem",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <p>
                {contact.firstName} {contact.lastName}
              </p>
              <p>{contact.status ? "Active" : "Inactive"}</p>

              <button className="contact-btn" name="edit-contact">
                edit contact
              </button>
              <button
                className="contact-btn"
                name="delete-contact"
                onClick={() => deleteContact(contact.id)}
              >
                delete contact
              </button>
            </div>
          );
        })
      ) : (
        <div className="result">
          <p>OOPs! No contact found</p>
          <p>Create a new contact from the Create Contact button☝️</p>
        </div>
      )}
    </div>
  );
};

export default Contact;

const ContactForm = () => {
  return (
    <form>
      <label>
        First Name:
        <input type="text" />
      </label>
      <label>
        Last Name:
        <input type="text" />
      </label>
      <label>
        Status:
        <input type="checkbox" />
      </label>
    </form>
  );
};

const EditContact = () => {};
