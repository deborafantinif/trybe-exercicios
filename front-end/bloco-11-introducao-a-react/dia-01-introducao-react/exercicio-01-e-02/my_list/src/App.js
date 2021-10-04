import './App.css';

const myTasks = ["Make coffee", "Study LocalStorage", "Read chapter 3 to 6", "Make the exercise in chapter 6", "Review my PDI"]

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return <ol>{myTasks.map((task) => Task(task))}</ol>;
}

export default App;
