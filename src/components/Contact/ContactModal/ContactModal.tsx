import "./ContactModal.css";

const ContactModal = () => {
  return (
    <form>
      Contact Form
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

export default ContactModal;
