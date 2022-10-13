import { useState } from "react";
import "./App.css";

const ToDoListContainer = (props) => {
  return (
    <div>
      {props.toDoList.map((toDo)=>{
			  return <ToDoItem toDo={toDo} />
		  })}
    </div>
  )
}

const ToDoItem = (props) => {
  // console.log(props.toDo);

  return (
    <div>
      <h2>{props.toDo.title}</h2>
      <p>Priority: {props.toDo.priority}</p>
      <p>Creation Date: {props.toDo.creationDate}</p>
      <p>Completed Date: {props.toDo.isComplete}</p>
        {props.toDo.completedDate && <p>Completed Date: {props.toDo.completedDate}</p>}
      <p>Description: {props.toDo.description}</p>
    </div>
  )
}

const ToDoForm = (props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <label>Title </label>
      <input type="text" onChange={(e) => {setTitle(e.target.value) }} />
      <br/>

      <label>Priority </label>
      <select onChange={(e)=>{setPriority(e.target.value) }}>
        <option value="">Select Priority Level</option>
		    <option value="Low">Low</option> 
        <option value="Medium">Medium</option>
        <option value="High">High</option>
	    </select>
	    <br/>

      <label>Description </label>
        <textarea onChange={(e)=>{setDescription(e.target.value) }}></textarea>
      <br/>

      <button onClick={()=>{
		    props.handleAddToDo(title, priority, description)
        }}>Add ToDo</button>
    </div>
  )
}

const App = () => {

  const [toDoList, setToDoList] = useState([{
		title: "Implement ToDo List",
		description: "Implement the todo list application",
		isComplete: false,
		priority: "High",
		creationDate: new Date().toString(),
		completedDate: null
	}])

  const handleAddToDo = (title, priority, description) => {
    const newToDo = {
      title: title,
      priority: priority,
      isComplete: false,
      description: description,
      creationDate: new Date().toString(),
      completedDate: null
    }

    const toDoListCopy = [...toDoList, newToDo]

    setToDoList(toDoListCopy)
  }

  return (
		<div className="App-header">
      <h1>Todo List</h1>
        <ToDoForm handleAddToDo={handleAddToDo}   />
        <ToDoListContainer toDoList={toDoList}/>
		</div>
	);
}

export default App;


