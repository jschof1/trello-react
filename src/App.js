import "./styles.css";
import { Card } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      {BoardOne.map((aboard) => (
        <Card className="card">
          <Card className="cards" variant="outlined">
            <Board key={BoardOne.id} board={aboard} />
          </Card>
        </Card>
      ))}
    </div>
  );
}

const Board = ({ board }) => {
  return (
    <p>
      <Task thing={board} />
    </p>
  );
};

const Task = ({ thing }) => <p> {thing.task} </p>;

const BoardOne = [
  {
    id: 1,
    task: "public"
  },
  {
    id: 2,
    task: "Do this"
  },
  {
    id: 3,
    task: ".gitignore"
  },
  {
    id: 4,
    task: ".gitignore"
  },
  {
    id: 5,
    task: ".gitignore"
  }
];
