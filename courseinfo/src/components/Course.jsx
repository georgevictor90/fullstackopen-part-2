const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Total = ({ sumOfExercises }) => {
  return <p>Number of exercises {sumOfExercises}</p>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  const sumOfExercises = course.parts.reduce(
    (acc, cur) => acc + cur.exercises,
    0
  );

  return (
    <>
      <Header name={course.name} />
      <Content course={course} />
      <Total sumOfExercises={sumOfExercises} />
    </>
  );
};

export default Course;
