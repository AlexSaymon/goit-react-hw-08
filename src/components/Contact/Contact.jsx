const Contact = ({ id, name, number, onDelete }) => (
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <p>
      {name}: {number}
    </p>
    <button onClick={onDelete} style={{ padding: "8px", fontSize: "16px" }}>
      Delete
    </button>
  </div>
);

export default Contact;
