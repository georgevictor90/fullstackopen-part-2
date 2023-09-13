const Person = ({ person }) => {
  return (
    <span key={person.name}>
      {person.name} {person.number}
    </span>
  );
};

export default Person;
