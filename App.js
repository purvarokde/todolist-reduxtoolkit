import "./App.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addTask, deleteTask } from "./components/ToDoSlice";
import { useSelector, useDispatch } from "react-redux";

/* 
class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      textValue: "",
    };
  }

  onChangelistener = (e) => {
    let value = e.target.value;
    this.setState({ textValue: value });
  };

  addTaskListener = (e) => {
    e.preventDefault();
    let task = {
      id: uuidv4(),
      taskName: this.state.textValue,
    };
    let NewList = [...this.state.list, task];
    this.setState({
      list: NewList,
      textValue: "",
    });
  };

  render() {
    return (
      <main className="main-container">
        <header>TO DO LIST</header>
        <div className="App">
          <input
            type="text"
            name="taskname"
            className="form-container"
            onChange={this.onChangelistener}
            value={this.state.textValue}
          ></input>
          <button onClick={this.addTaskListener}>ADD</button>
          <div className="container">
            {this.state.list.map((item) => (
              <div className="child-container" key={item.id}>
                <p>{item.taskName}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
} */

function App() {
  const [textValue, setTextValue] = useState("");

  const list = useSelector((state) => state.reducer.list);
  const dispatch = useDispatch();

  const onChangeListener = (e) => {
    let value = e.target.value;
    setTextValue(value);
  };

  const addTaskListener = (e) => {
    e.preventDefault();
    dispatch(addTask(textValue));
  };

  return (
    <main className="main-container">
      <header>TO DO LIST</header>
      <div className="App">
        <form className="form-container" onSubmit={addTaskListener}>
          <input
            type="text"
            name="taskname"
            className="form-container"
            onChange={onChangeListener}
            value={textValue}
          ></input>
          <button type="submit">ADD</button>
        </form>
        <div className="container">
          {list.map((item) => (
            <div className="child-container" key={item.id}>
              <p>{item.taskName}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
