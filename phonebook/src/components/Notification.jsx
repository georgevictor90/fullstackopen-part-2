const Notification = ({ message }) => {
  if (message === null) return null;

  const notificationStyle = {
    color: message.error ? "red" : "green",
    background: "lightgrey",
    fontSize: "20px",
    border: "5px solid",
    padding: "10px",
    marginBottom: "10px",
  };

  return (
    <div style={notificationStyle} className="notification">
      {message.text}
    </div>
  );
};

export default Notification;
