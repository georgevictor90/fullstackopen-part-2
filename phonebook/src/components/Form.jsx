const Form = ({
  name,
  phone,
  handleSubmit,
  handleNameChange,
  handlePhoneChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        number:
        <input type="tel" value={phone} onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
